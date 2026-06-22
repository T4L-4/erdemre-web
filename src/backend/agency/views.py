from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from datetime import datetime

from .models import Service, Lead, Appointment, BlogPost, CaseStudy, ContactMessage
from .serializers import (
    ServiceSerializer, LeadSerializer, AppointmentSerializer,
    BlogPostSerializer, CaseStudySerializer, ContactMessageSerializer
)

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    lookup_field = 'slug'

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().order_by('-publish_date')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

class CaseStudyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CaseStudy.objects.all()
    serializer_class = CaseStudySerializer
    lookup_field = 'slug'

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    def perform_create(self, serializer):
        # Classify lead based on budget or request
        budget = self.request.data.get('budget', '').lower()
        needs = self.request.data.get('needs', '').lower()
        
        # Simple intent analysis
        if '$5,000+' in budget or '5000' in budget or '10000' in budget or 'kurumsal' in needs or 'enterprise' in needs:
            lead_type = 'high'
        elif 'bütçe yok' in budget or 'belirsiz' in budget:
            lead_type = 'low'
        else:
            lead_type = 'medium'

        # Detect source from UTM parameters or referrer passed by frontend
        source_param = self.request.query_params.get('utm_source', '').lower()
        if not source_param:
            source_param = self.request.data.get('source', '').lower()
        
        if 'seo' in source_param or 'google-organic' in source_param:
            source = 'seo'
        elif 'cpc' in source_param or 'ads' in source_param or 'google' in source_param:
            source = 'ads'
        elif 'social' in source_param or 'instagram' in source_param or 'linkedin' in source_param or 'facebook' in source_param:
            source = 'social'
        else:
            source = 'other'

        serializer.save(lead_type=lead_type, source=source, status='new')

        # Simulate Email notification to admin (log to terminal)
        print(f"\n[EMAIL NOTIFICATION - ADMIN]")
        print(f"To: admin@agency.com")
        print(f"Subject: New {lead_type.upper()} Intent Lead Received!")
        print(f"Company: {serializer.validated_data.get('company_name')}")
        print(f"Contact: {serializer.validated_data.get('contact_name')} ({serializer.validated_data.get('contact_email')})")
        print(f"Needs: {serializer.validated_data.get('needs')}\n")

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    @action(detail=False, methods=['get'], url_path='slots')
    def available_slots(self, request):
        date_str = request.query_params.get('date')
        if not date_str:
            return Response({"error": "Date parameter is required (YYYY-MM-DD)"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            target_date = datetime.strptime(date_str, "%Y-%m-%d").date()
        except ValueError:
            return Response({"error": "Invalid date format. Use YYYY-MM-DD"}, status=status.HTTP_400_BAD_REQUEST)

        # Standard work hour slots
        all_slots = [
            "09:00 - 09:30",
            "10:00 - 10:30",
            "11:00 - 11:30",
            "14:00 - 14:30",
            "15:00 - 15:30",
            "16:00 - 16:30"
        ]

        # Find already booked slots for this date
        booked_slots = Appointment.objects.filter(date=target_date).values_list('time_slot', flat=True)
        
        # Filter available slots
        available = [slot for slot in all_slots if slot not in booked_slots]

        return Response({
            "date": date_str,
            "available_slots": available
        })

    def perform_create(self, serializer):
        appointment = serializer.save(confirmed=True) # Automatically confirm in simulation
        
        # Simulate Email notification to client and admin
        print(f"\n[EMAIL NOTIFICATION - CLIENT]")
        print(f"To: {appointment.email}")
        print(f"Subject: Appointment Confirmed - {appointment.date} {appointment.time_slot}")
        print(f"Hi {appointment.name}, your online meeting with our marketing team has been confirmed.")
        print(f"Meeting link: https://meet.google.com/mock-appointment-link\n")

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
