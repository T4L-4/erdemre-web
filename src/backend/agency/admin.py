from django.contrib import admin
from .models import Service, Lead, Appointment, BlogPost, CaseStudy, ContactMessage

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'icon')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'description')

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('contact_name', 'company_name', 'sector', 'budget', 'lead_type', 'source', 'status', 'created_at')
    list_filter = ('lead_type', 'source', 'status', 'created_at')
    search_fields = ('contact_name', 'company_name', 'contact_email', 'needs')
    list_editable = ('status', 'lead_type')

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'date', 'time_slot', 'confirmed', 'created_at')
    list_filter = ('date', 'confirmed', 'created_at')
    search_fields = ('name', 'company', 'email', 'notes')
    list_editable = ('confirmed',)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'author', 'publish_date')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'content', 'summary')
    list_filter = ('publish_date', 'author')

@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ('title', 'client_name', 'kpi_traffic', 'kpi_conversion', 'kpi_roi')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'description', 'client_name')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject', 'message')
