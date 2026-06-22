const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Fallback Mock Data for UI/UX demonstration when backend is not running
const MOCK_SERVICES = [
  {
    title: "Arama Motoru Optimizasyonu (SEO)",
    slug: "arama-motoru-optimizasyonu-seo",
    description: "Google'da üst sıralara çıkarak organik trafiğinizi ve satışlarınızı kalıcı olarak artırın.",
    problem: "Potansiyel müşterileriniz Google'da hizmetlerinizi arıyor ama rakiplerinizi buluyor. Yüksek reklam maliyetleri kârlılığınızı eritiyor.",
    solution: "Anahtar kelime stratejisi, teknik SEO optimizasyonu ve otoriter backlink çalışmaları ile sitenizi Google'ın 1. sayfasına taşıyoruz.",
    process: "1. Detaylı SEO Auditi & Rakip Analizi\n2. Teknik Hataların Giderilmesi\n3. İçerik ve Anahtar Kelime Optimizasyonu\n4. Otorite ve Link İnşası.",
    results: "%250'ye varan organik trafik artışı ve kalıcı B2B müşteri adayları.",
    icon: "Search",
    meta_title: "Kurumsal SEO Hizmeti - Arama Motoru Optimizasyonu | Ajans",
    meta_description: "Kurumsal markalar için profesyonel SEO hizmeti. Google sıralamalarınızı yükseltin ve organik müşteri trafiği elde edin."
  },
  {
    title: "Google Ads Yönetimi",
    slug: "google-ads-yonetimi",
    description: "Yüksek dönüşüm odaklı arama ağı, görüntülü reklam ve yeniden pazarlama kampanyaları.",
    problem: "Reklam bütçeniz tükeniyor ama hedeflenen form veya satış sayılarına ulaşamıyorsunuz. ROI (Yatırım Getirisi) takibiniz yetersiz.",
    solution: "Yapay zeka destekli hedefleme, negatif kelime yönetimi ve sürekli A/B testleriyle reklam harcamalarınızın her kuruşunu dönüşüme çeviriyoruz.",
    process: "1. Kampanya Stratejisi & Bütçe Planlama\n2. Kreatif ve Metin Hazırlığı\n3. Negatif Filtreleme & Yayına Alma\n4. Günlük Optimizasyon & Dönüşüm Analizi.",
    results: "Hızlı lead üretimi ve reklam maliyetlerinde %35'e varan tasarruf.",
    icon: "TrendingUp",
    meta_title: "Google Ads & PPC Reklam Yönetimi | Ajans",
    meta_description: "Profesyonel Google Ads kampanya yönetimi ile bütçenizi optimize edin, en yüksek yatırım getirisini (ROI) elde edin."
  },
  {
    title: "Sosyal Medya Yönetimi",
    slug: "sosyal-medya-yonetimi",
    description: "Linkedin ve Instagram gibi platformlarda markanızın kurumsal itibarını güçlendirin.",
    problem: "Sosyal medya hesaplarınız düzensiz, tasarımlar amatör görünüyor ve hedef kitlenizle etkileşim kuramıyorsunuz.",
    solution: "20-35 yaş hedef kitleye hitap eden dinamik görsel diller, Linkedin liderlik içerikleri ve kurumsal duruşa uygun kreatif sosyal medya planları hazırlıyoruz.",
    process: "1. Sosyal Medya İletişim Stratejisi\n2. Aylık İçerik Takvimi & Tasarımlar\n3. Topluluk Yönetimi & Raporlama.",
    results: "Marka bilinirliğinde %180 artış ve sosyal kanallardan doğrudan inbound lead.",
    icon: "Share2",
    meta_title: "Kurumsal Sosyal Medya ve LinkedIn Yönetimi | Ajans",
    meta_description: "B2B markaları için sosyal medya yönetimi ve LinkedIn düşünce liderliği stratejileri."
  },
  {
    title: "İçerik Pazarlama (Content Marketing)",
    slug: "icerik-pazarlama-content-marketing",
    description: "Bilgi veren, eğiten ve satın almaya ikna eden SEO uyumlu içerik stratejileri.",
    problem: "Sitenizdeki blog yazıları okunmuyor ya da okuyucuyu müşteriye dönüştüremiyor.",
    solution: "Müşterilerinizin karar verme süreçlerindeki soru işaretlerini çözen derinlemesine blog yazıları, e-kitaplar ve infografikler üretiyoruz.",
    process: "1. Müşteri Persona Analizi\n2. İçerik Planlama & Yazım\n3. Dağıtım & Dönüşüm Optimizasyonu.",
    results: "Sektörde güvenilirlik, yüksek trafik ve inbound pazarlama hunisi.",
    icon: "BookOpen",
    meta_title: "B2B İçerik Pazarlaması Stratejileri | Ajans",
    meta_description: "Hedef kitlenizi eğiten, arama motorlarında sıralanan ve onları müşteriye dönüştüren içerik çözümleri."
  },
  {
    title: "Dönüşüm Oranı Optimizasyonu (CRO)",
    slug: "donusum-orani-optimizasyonu-cro",
    description: "Mevcut web trafiğinizi artırmadan, sitenizden elde ettiğiniz form ve satış oranlarını katlayın.",
    problem: "Sitenize binlerce ziyaretçi geliyor fakat hemen çıkış yapıyorlar ve form doldurmuyorlar.",
    solution: "Kullanıcı deneyimi analizi, ısı haritaları ve A/B testleri ile sitenizin tasarımındaki engelleri kaldırarak dönüşüm oranını yükseltiyoruz.",
    process: "1. Isı Haritası & Tıklama Analizleri\n2. UI/UX İyileştirme Önerileri\n3. A/B Testleri & Canlıya Alma.",
    results: "Trafik maliyetini artırmadan dönüşümlerde %50+ artış.",
    icon: "Target",
    meta_title: "Dönüşüm Oranı Optimizasyonu (CRO) Hizmeti | Ajans",
    meta_description: "Web sitenizin kullanıcı deneyimini iyileştirerek mevcut ziyaretçilerinizi müşteriye dönüştürün."
  }
];

const MOCK_BLOGS = [
  {
    title: "B2B Pazarlamada 2026 Trendleri: 20-35 Yaş Karar Vericilere Nasıl Ulaşılır?",
    slug: "b2b-pazarlamada-2026-trendleri-20-35-yas-karar-vericilere-nasil-ulasilir",
    summary: "Yeni nesil kurumsal yöneticiler ve startup kurucuları geleneksel satış taktiklerinden hoşlanmıyor. Onları kazanmanın dijital yolları.",
    content: `Günümüzde kurumsal şirketlerde karar verici pozisyonlarında 20-35 yaş arasındaki Y ve Z kuşağı profesyonelleri ağırlık kazanmaya başladı. Bu kitle, soğuk satış aramaları veya uzun satış sunumları yerine, kendi araştırmalarını yapmayı ve dijital platformlar üzerinden hızlıca bilgi almayı tercih ediyor.

Nasıl başarılı olabilirsiniz?
1. LinkedIn Üzerinden Değer Üretin: Karar vericiler LinkedIn'de aktif olarak sektör analizlerini okuyor.
2. Sürtünmesiz Dönüşüm Kanalları Kurun: Sitenizde karmaşık PDF formları yerine, 30 saniyede doldurulabilen akıllı randevu ve teklif formları kullanın.
3. Case Study Odaklı Gidin: Sloganlar yerine net KPI başarı hikayeleri sunun.`,
    author: "Agency Team",
    publish_date: "2026-06-20",
    image_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=60",
    meta_title: "B2B Pazarlamada Yeni Nesil Trendler (2026)",
    meta_description: "Y ve Z kuşağı kurumsal karar vericileri etkilemek için modern B2B dijital pazarlama stratejileri ve ipuçları."
  },
  {
    title: "Web Sitenizde Dönüşüm Oranını Artırmanın 5 Altın Kuralı",
    slug: "web-sitenizde-donusum-oranini-artirmanin-5-altin-kurala",
    summary: "Reklamlara para harcamadan önce web sitenizin bu dönüşüm kriterlerini karşıladığından emin olun.",
    content: `Pek çok ajans ve şirket web sitelerine trafik çekmek için ciddi bütçeler ayırır. Ancak sitelerine gelen ziyaretçilerin %98'i form doldurmadan veya alışveriş yapmadan ayrılır. İşte dönüşüm oranlarınızı (CRO) hemen iyileştirecek 5 kural:

1. Net Bir Değer Önermesi (Hero Bölümü)
2. Mobil Uyumlu Hızlı Formlar
3. Sosyal Kanıt ve Referanslar
4. Harekete Geçirici Mesajların (CTA) Görsel Belirginliği
5. Sürtünmesiz Randevu Planlama Altyapısı.`,
    author: "Agency Team",
    publish_date: "2026-06-15",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    meta_title: "Web Sitesi Dönüşüm Oranı Artırma Yolları - CRO Rehberi",
    meta_description: "Mevcut web sitenizin bütçesini artırmadan dönüşüm oranlarını yükselterek daha fazla müşteri adayı kazanmanın yolları."
  }
];

const MOCK_CASE_STUDIES = [
  {
    title: "FinTech Startup'ı İçin Organik Kayıt Oranlarını Artırdık",
    slug: "fintech-startupi-icin-organik-kayit-oranlarini-artirdik",
    client_name: "CredoFinance",
    description: "SaaS modeliyle çalışan kurumsal bir finansal teknoloji şirketi için SEO ve içerik pazarlama stratejisi geliştirdik.",
    kpi_traffic: "+240% Organik Trafik",
    kpi_conversion: "+4.1% Dönüşüm Oranı",
    kpi_roi: "6x SEO Yatırım Getirisi",
    results_detail: "Teknik altyapıdaki indeksleme sorunlarını düzelttik. Ardından 20-35 yaş finans profesyonellerini hedefleyen 'Kurumsal Gider Yönetimi' rehberleri yayınlayarak organik üye kayıt sayısını uçurduk.",
    meta_title: "CredoFinance Başarı Hikayesi - FinTech SEO Projesi",
    meta_description: "Bir B2B fintech girişiminin organik trafiğini 12 ayda %240 nasıl artırdığımızı ve üye kazanımını nasıl katladığımızı inceleyin."
  },
  {
    title: "Lojistik Devinin Google Ads Bütçesini %30 Optimize Ettik",
    slug: "lojistik-devinin-google-ads-butcesini-30-optimize-ettik",
    client_name: "LogiTrans Global",
    description: "Uluslararası taşımacılık hizmeti sunan şirketin Google Ads kampanyalarını yeniden yapılandırdık.",
    kpi_traffic: "+120% Lead Artışı",
    kpi_conversion: "%32 Maliyet Düşüşü",
    kpi_roi: "4.5x Reklam Dönüşümü",
    results_detail: "Gereksiz tıklamalara neden olan 1,200'ün üzerinde negatif anahtar kelime belirledik. Dönüşüm hunisini sadeleştirip teklif al formunu yeniden tasarlayarak lead sayısını rekor seviyeye ulaştırdık.",
    meta_title: "LogiTrans Google Ads Bütçe Optimizasyon Vaka Çalışması",
    meta_description: "Uluslararası bir lojistik şirketi için reklam maliyetlerini düşürürken nasıl daha fazla müşteri adayı (lead) topladığımızın analizi."
  }
];

export async function getServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/services/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_SERVICES;
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/services/${slug}/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_SERVICES.find(s => s.slug === slug) || MOCK_SERVICES[0];
  }
}

export async function getBlogPosts() {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_BLOGS;
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${slug}/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_BLOGS.find(b => b.slug === slug) || MOCK_BLOGS[0];
  }
}

export async function getCaseStudies() {
  try {
    const res = await fetch(`${API_BASE_URL}/case-studies/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_CASE_STUDIES;
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/case-studies/${slug}/`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    return MOCK_CASE_STUDIES.find(c => c.slug === slug) || MOCK_CASE_STUDIES[0];
  }
}

export async function submitLead(data: any) {
  const res = await fetch(`${API_BASE_URL}/leads/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Form gönderimi sırasında bir hata oluştu.');
  }
  return await res.json();
}

export async function submitContactMessage(data: any) {
  const res = await fetch(`${API_BASE_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Mesaj gönderimi sırasında bir hata oluştu.');
  }
  return await res.json();
}

export async function getAvailableSlots(date: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments/slots/?date=${date}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.available_slots || [];
  } catch (e) {
    // Return standard dummy slots on error
    return ["09:00 - 09:30", "10:00 - 10:30", "11:00 - 11:30", "14:00 - 14:30", "15:00 - 15:30", "16:00 - 16:30"];
  }
}

export async function submitAppointment(data: any) {
  const res = await fetch(`${API_BASE_URL}/appointments/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Randevu kaydı sırasında bir hata oluştu.');
  }
  return await res.json();
}
