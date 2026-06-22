from django.db import models
from django.utils.text import slugify

class Service(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    problem = models.TextField(help_text="Problem definition for SEO landing page")
    solution = models.TextField(help_text="Solution description")
    process = models.TextField(help_text="Our step-by-step process")
    results = models.TextField(help_text="Expected results/KPIs")
    icon = models.CharField(max_length=50, default="Activity", help_text="Lucide icon identifier")
    meta_title = models.CharField(max_length=150, blank=True)
    meta_description = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Lead(models.Model):
    INTENT_CHOICES = [
        ('high', 'High Intent'),
        ('medium', 'Medium Intent'),
        ('low', 'Low Intent'),
    ]
    SOURCE_CHOICES = [
        ('seo', 'SEO'),
        ('ads', 'Google Ads'),
        ('social', 'Social Media'),
        ('other', 'Other'),
    ]
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('converted', 'Converted'),
    ]

    company_name = models.CharField(max_length=150)
    sector = models.CharField(max_length=100, blank=True, null=True)
    budget = models.CharField(max_length=100)
    needs = models.TextField()
    contact_name = models.CharField(max_length=100)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=20)
    lead_type = models.CharField(max_length=10, choices=INTENT_CHOICES, default='medium')
    source = models.CharField(max_length=10, choices=SOURCE_CHOICES, default='other')
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.contact_name} ({self.company_name})"

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=150, blank=True, null=True)
    date = models.DateField()
    time_slot = models.CharField(max_length=20) # e.g. "10:00 - 10:30"
    notes = models.TextField(blank=True, null=True)
    confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time_slot}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    content = models.TextField()
    summary = models.TextField()
    author = models.CharField(max_length=100, default="Agency Team")
    publish_date = models.DateField(auto_now_add=True)
    image_url = models.CharField(max_length=255, blank=True, null=True, help_text="Cover image path or URL")
    meta_title = models.CharField(max_length=150, blank=True)
    meta_description = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class CaseStudy(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    client_name = models.CharField(max_length=100)
    kpi_traffic = models.CharField(max_length=50, blank=True, null=True, help_text="e.g. +145% Traffic Increase")
    kpi_conversion = models.CharField(max_length=50, blank=True, null=True, help_text="e.g. +3.2% Conversion Rate")
    kpi_roi = models.CharField(max_length=50, blank=True, null=True, help_text="e.g. 5x Return on Ad Spend")
    results_detail = models.TextField()
    meta_title = models.CharField(max_length=150, blank=True)
    meta_description = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Msg from {self.name}: {self.subject}"
