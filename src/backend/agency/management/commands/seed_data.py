from django.core.management.base import BaseCommand
from agency.models import Service, BlogPost, CaseStudy

class Command(BaseCommand):
    help = 'Seeds initial data for the agency website'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        # 1. Services
        services_data = [
            {
                "title": "Arama Motoru Optimizasyonu (SEO)",
                "description": "Google'da üst sıralara çıkarak organik trafiğinizi ve satışlarınızı kalıcı olarak artırın.",
                "problem": "Potansiyel müşterileriniz Google'da hizmetlerinizi arıyor ama rakiplerinizi buluyor. Yüksek reklam maliyetleri kârlılığınızı eritiyor.",
                "solution": "Anahtar kelime stratejisi, teknik SEO optimizasyonu ve otoriter backlink çalışmaları ile sitenizi Google'ın 1. sayfasına taşıyoruz.",
                "process": "1. Detaylı SEO Auditi & Rakip Analizi\n2. Teknik Hataların Giderilmesi\n3. İçerik ve Anahtar Kelime Optimizasyonu\n4. Otorite ve Link İnşası.",
                "results": "%250'ye varan organik trafik artışı ve kalıcı B2B müşteri adayları.",
                "icon": "Search",
                "meta_title": "Kurumsal SEO Hizmeti - Arama Motoru Optimizasyonu | Ajans",
                "meta_description": "Kurumsal markalar için profesyonel SEO hizmeti. Google sıralamalarınızı yükseltin ve organik müşteri trafiği elde edin."
            },
            {
                "title": "Google Ads Yönetimi",
                "description": "Yüksek dönüşüm odaklı arama ağı, görüntülü reklam ve yeniden pazarlama kampanyaları.",
                "problem": "Reklam bütçeniz tükeniyor ama hedeflenen form veya satış sayılarına ulaşamıyorsunuz. ROI (Yatırım Getirisi) takibiniz yetersiz.",
                "solution": "Yapay zeka destekli hedefleme, negatif kelime yönetimi ve sürekli A/B testleriyle reklam harcamalarınızın her kuruşunu dönüşüme çeviriyoruz.",
                "process": "1. Kampanya Stratejisi & Bütçe Planlama\n2. Kreatif ve Metin Hazırlığı\n3. Negatif Filtreleme & Yayına Alma\n4. Günlük Optimizasyon & Dönüşüm Analizi.",
                "results": "Hızlı lead üretimi ve reklam maliyetlerinde %35'e varan tasarruf.",
                "icon": "TrendingUp",
                "meta_title": "Google Ads & PPC Reklam Yönetimi | Ajans",
                "meta_description": "Profesyonel Google Ads kampanya yönetimi ile bütçenizi optimize edin, en yüksek yatırım getirisini (ROI) elde edin."
            },
            {
                "title": "Sosyal Medya Yönetimi",
                "description": "Linkedin ve Instagram gibi platformlarda markanızın kurumsal itibarını güçlendirin.",
                "problem": "Sosyal medya hesaplarınız düzensiz, tasarımlar amatör görünüyor ve hedef kitlenizle etkileşim kuramıyorsunuz.",
                "solution": "20-35 yaş hedef kitleye hitap eden dinamik görsel diller, Linkedin liderlik içerikleri ve kurumsal duruşa uygun kreatif sosyal medya planları hazırlıyoruz.",
                "process": "1. Sosyal Medya İletişim Stratejisi\n2. Aylık İçerik Takvimi & Tasarımlar\n3. Topluluk Yönetimi & Raporlama.",
                "results": "Marka bilinirliğinde %180 artış ve sosyal kanallardan doğrudan inbound lead.",
                "icon": "Share2",
                "meta_title": "Kurumsal Sosyal Medya ve LinkedIn Yönetimi | Ajans",
                "meta_description": "B2B markaları için sosyal medya yönetimi ve LinkedIn düşünce liderliği stratejileri."
            },
            {
                "title": "İçerik Pazarlama (Content Marketing)",
                "description": "Bilgi veren, eğiten ve satın almaya ikna eden SEO uyumlu içerik stratejileri.",
                "problem": "Sitenizdeki blog yazıları okunmuyor ya da okuyucuyu müşteriye dönüştüremiyor.",
                "solution": "Müşterilerinizin karar verme süreçlerindeki soru işaretlerini çözen derinlemesine blog yazıları, e-kitaplar ve infografikler üretiyoruz.",
                "process": "1. Müşteri Persona Analizi\n2. İçerik Planlama & Yazım\n3. Dağıtım & Dönüşüm Optimizasyonu.",
                "results": "Sektörde güvenilirlik, yüksek trafik ve inbound pazarlama hunisi.",
                "icon": "BookOpen",
                "meta_title": "B2B İçerik Pazarlaması Stratejileri | Ajans",
                "meta_description": "Hedef kitlenizi eğiten, arama motorlarında sıralanan ve onları müşteriye dönüştüren içerik çözümleri."
            },
            {
                "title": "Dönüşüm Oranı Optimizasyonu (CRO)",
                "description": "Mevcut web trafiğinizi artırmadan, sitenizden elde ettiğiniz form ve satış oranlarını katlayın.",
                "problem": "Sitenize binlerce ziyaretçi geliyor fakat hemen çıkış yapıyorlar ve form doldurmuyorlar.",
                "solution": "Kullanıcı deneyimi analizi, ısı haritaları ve A/B testleri ile sitenizin tasarımındaki engelleri kaldırarak dönüşüm oranını yükseltiyoruz.",
                "process": "1. Isı Haritası & Tıklama Analizleri\n2. UI/UX İyileştirme Önerileri\n3. A/B Testleri & Canlıya Alma.",
                "results": "Trafik maliyetini artırmadan dönüşümlerde %50+ artış.",
                "icon": "Target",
                "meta_title": "Dönüşüm Oranı Optimizasyonu (CRO) Hizmeti | Ajans",
                "meta_description": "Web sitenizin kullanıcı deneyimini iyileştirerek mevcut ziyaretçilerinizi müşteriye dönüştürün."
            }
        ]

        for s_data in services_data:
            Service.objects.update_or_create(title=s_data["title"], defaults=s_data)

        # 2. Case Studies
        case_studies_data = [
            {
                "title": "FinTech Startup'ı İçin Organik Kayıt Oranlarını Artırdık",
                "client_name": "CredoFinance",
                "description": "SaaS modeliyle çalışan kurumsal bir finansal teknoloji şirketi için SEO ve içerik pazarlama stratejisi geliştirdik.",
                "kpi_traffic": "+240% Organik Trafik",
                "kpi_conversion": "+4.1% Dönüşüm Oranı",
                "kpi_roi": "6x SEO Yatırım Getirisi",
                "results_detail": "Teknik altyapıdaki indeksleme sorunlarını düzelttik. Ardından 20-35 yaş finans profesyonellerini hedefleyen 'Kurumsal Gider Yönetimi' rehberleri yayınlayarak organik üye kayıt sayısını uçurduk.",
                "meta_title": "CredoFinance Başarı Hikayesi - FinTech SEO Projesi",
                "meta_description": "Bir B2B fintech girişiminin organik trafiğini 12 ayda %240 nasıl artırdığımızı ve üye kazanımını nasıl katladığımızı inceleyin."
            },
            {
                "title": "Lojistik Devinin Google Ads Bütçesini %30 Optimize Ettik",
                "client_name": "LogiTrans Global",
                "description": "Uluslararası taşımacılık hizmeti sunan şirketin Google Ads kampanyalarını yeniden yapılandırdık.",
                "kpi_traffic": "+120% Lead Artışı",
                "kpi_conversion": "%32 Maliyet Düşüşü",
                "kpi_roi": "4.5x Reklam Dönüşümü",
                "results_detail": "Gereksiz tıklamalara neden olan 1,200'ün üzerinde negatif anahtar kelime belirledik. Dönüşüm hunisini sadeleştirip teklif al formunu yeniden tasarlayarak lead sayısını rekor seviyeye ulaştırdık.",
                "meta_title": "LogiTrans Google Ads Bütçe Optimizasyon Vaka Çalışması",
                "meta_description": "Uluslararası bir lojistik şirketi için reklam maliyetlerini düşürürken nasıl daha fazla müşteri adayı (lead) topladığımızın analizi."
            }
        ]

        for cs_data in case_studies_data:
            CaseStudy.objects.update_or_create(title=cs_data["title"], defaults=cs_data)

        # 3. Blog Posts
        blog_posts_data = [
            {
                "title": "B2B Pazarlamada 2026 Trendleri: 20-35 Yaş Karar Vericilere Nasıl Ulaşılır?",
                "summary": "Yeni nesil kurumsal yöneticiler ve startup kurucuları geleneksel satış taktiklerinden hoşlanmıyor. Onları kazanmanın dijital yolları.",
                "content": "Günümüzde kurumsal şirketlerde karar verici pozisyonlarında 20-35 yaş arasındaki Y ve Z kuşağı profesyonelleri ağırlık kazanmaya başladı. Bu kitle, soğuk satış aramaları veya uzun satış sunumları yerine, kendi araştırmalarını yapmayı ve dijital platformlar üzerinden hızlıca bilgi almayı tercih ediyor.\n\nNasıl başarılı olabilirsiniz?\n1. LinkedIn Üzerinden Değer Üretin: Karar vericiler LinkedIn'de aktif olarak sektör analizlerini okuyor.\n2. Sürtünmesiz Dönüşüm Kanalları Kurun: Sitenizde karmaşık PDF formları yerine, 30 saniyede doldurulabilen akıllı randevu ve teklif formları kullanın.\n3. Case Study Odaklı Gidin: Sloganlar yerine net KPI başarı hikayeleri sunun.",
                "image_url": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=60",
                "meta_title": "B2B Pazarlamada Yeni Nesil Trendler (2026)",
                "meta_description": "Y ve Z kuşağı kurumsal karar vericileri etkilemek için modern B2B dijital pazarlama stratejileri ve ipuçları."
            },
            {
                "title": "Web Sitenizde Dönüşüm Oranını Artırmanın 5 Altın Kuralı",
                "summary": "Reklamlara para harcamadan önce web sitenizin bu dönüşüm kriterlerini karşıladığından emin olun.",
                "content": "Pek çok ajans ve şirket web sitelerine trafik çekmek için ciddi bütçeler ayırır. Ancak sitelerine gelen ziyaretçilerin %98'i form doldurmadan veya alışveriş yapmadan ayrılır. İşte dönüşüm oranlarınızı (CRO) hemen iyileştirecek 5 kural:\n\n1. Net Bir Değer Önermesi (Hero Bölümü)\n2. Mobil Uyumlu Hızlı Formlar\n3. Sosyal Kanıt ve Referanslar\n4. Harekete Geçirici Mesajların (CTA) Görsel Belirginliği\n5. Sürtünmesiz Randevu Planlama Altyapısı.",
                "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
                "meta_title": "Web Sitesi Dönüşüm Oranı Artırma Yolları - CRO Rehberi",
                "meta_description": "Mevcut web sitenizin bütçesini artırmadan dönüşüm oranlarını yükselterek daha fazla müşteri adayı kazanmanın yolları."
            }
        ]

        for bp_data in blog_posts_data:
            BlogPost.objects.update_or_create(title=bp_data["title"], defaults=bp_data)

        self.stdout.write(self.style.SUCCESS('Successfully seeded all data!'))
