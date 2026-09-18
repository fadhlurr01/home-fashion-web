<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Template;
use App\Models\Package;
use App\Models\Faq;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Categories
        $catsFile = database_path('data/cats.json');
        if (file_exists($catsFile)) {
            $cats = json_decode(file_get_contents($catsFile), true);
            foreach ($cats as $idx => $cat) {
                Category::updateOrCreate(
                    ['key' => $cat['key']],
                    [
                        'label' => $cat['label'],
                        'short' => $cat['short'],
                        'img' => $cat['img'],
                        'order' => $idx + 1,
                    ]
                );
            }
        }

        // 2. Seed Templates
        $templatesFile = database_path('data/templates.json');
        if (file_exists($templatesFile)) {
            $templates = json_decode(file_get_contents($templatesFile), true);
            foreach ($templates as $t) {
                Template::updateOrCreate(
                    ['name' => $t['name']],
                    [
                        'cat' => $t['cat'],
                        'url' => $t['url'],
                        'desc' => $t['desc'],
                        'tags' => $t['tags'] ?? [],
                    ]
                );
            }
        }

        // 3. Seed Packages
        $packages = [
            [
                'tier' => 1,
                'name_id' => 'Pakaian Dasar',
                'name_en' => 'Essential Look',
                'price' => 'Rp 899k',
                'desc_id' => 'Untuk brand yang baru melangkah ke dunia digital.',
                'desc_en' => 'For brands taking their first step into the digital fashion space.',
                'features_id' => [
                    '1 template pilihan',
                    '5 halaman utama',
                    'Personalisasi dasar',
                    'Responsif semua perangkat',
                    '1x revisi',
                    'Dukungan 30 hari'
                ],
                'features_en' => [
                    '1 chosen template',
                    '5 key pages',
                    'Basic branding',
                    'Fully responsive across devices',
                    '1 revision round',
                    '30-day post-launch support'
                ],
                'is_featured' => false,
            ],
            [
                'tier' => 2,
                'name_id' => 'Koleksi Lengkap',
                'name_en' => 'Full Collection',
                'price' => 'Rp 1.899k',
                'desc_id' => 'Keseimbangan terbaik untuk brand yang sedang tumbuh.',
                'desc_en' => 'The sweet spot for fashion labels ready to expand their reach.',
                'features_id' => [
                    '2 template pilihan',
                    '10 halaman + blog',
                    'Personalisasi penuh',
                    'SEO dasar',
                    'Micro-interaction halus',
                    '3x revisi + dukungan 3 bulan'
                ],
                'features_en' => [
                    '2 template options',
                    '10 pages + journal / lookbook',
                    'Full brand personalization',
                    'Foundational fashion SEO',
                    'Smooth editorial micro-interactions',
                    '3 revision rounds + 90-day support'
                ],
                'is_featured' => true,
            ],
            [
                'tier' => 3,
                'name_id' => 'Boutique Eksklusif',
                'name_en' => 'Haute Couture',
                'price' => 'Rp 3.499k',
                'desc_id' => 'Pengalaman penuh untuk brand fashion yang serius.',
                'desc_en' => 'A bespoke runway experience for established fashion houses.',
                'features_id' => [
                    'Template premium pilihan',
                    'Halaman tanpa batas',
                    'Integrasi katalog & pesanan',
                    'SEO lengkap',
                    'Revisi tanpa batas (2 bulan)',
                    'Dukungan 12 bulan + pelatihan'
                ],
                'features_en' => [
                    'Premium flagship template',
                    'Unlimited pages & categories',
                    'Catalog & direct order integration',
                    'Comprehensive fashion SEO suite',
                    'Unlimited revisions (60 days)',
                    '12-month priority support & handover training'
                ],
                'is_featured' => false,
            ]
        ];

        foreach ($packages as $pkg) {
            Package::updateOrCreate(['tier' => $pkg['tier']], $pkg);
        }

        // 4. Seed FAQs
        $faqs = [
            [
                'order' => 1,
                'question_id' => 'Apa itu Fashion-Web dan untuk siapa?',
                'question_en' => 'What is Fashion-Web and who is it designed for?',
                'answer_id' => 'Fashion-Web adalah koleksi 81 template website fashion yang siap pakai, dikurasi untuk 8 kategori brand — dari Muslimah & Modest Wear, Boutique Luxury, hingga Footwear, Bags & Accessories. Dirancang untuk brand fashion yang ingin tampil profesional secara online tanpa ribet.',
                'answer_en' => 'Fashion-Web is an editorial catalog of 81 fashion website templates curated across eight brand categories  from modest wear and luxury boutiques to streetwear and accessories.',
            ],
            [
                'order' => 2,
                'question_id' => 'Bagaimana cara melihat pratinjau template?',
                'question_en' => 'How can I preview a template?',
                'answer_id' => 'Klik kartu template pada bagian Koleksi. Pratinjau menampilkan versi desktop dan mobile sekaligus — Anda bisa memilih mode Desktop, Mobile, atau Keduanya. Ingin melihat langsung? Tekan "Buka Demo Asli" untuk membuka situs asli template di tab baru.',
                'answer_en' => 'Click any template card in the Collection section. The live viewer lets you toggle between Desktop, Mobile, or Dual-device view modes.',
            ],
            [
                'order' => 3,
                'question_id' => 'Apakah template sudah responsif di semua perangkat?',
                'question_en' => 'Are the templates fully responsive?',
                'answer_id' => 'Tentu. Setiap template sudah 100% siap pakai dan responsif — tampil rapi di desktop, tablet, maupun smartphone. Anda bisa memeriksanya sendiri lewat pratinjau mode Mobile di setiap kartu.',
                'answer_en' => 'Yes, every template is engineered from the ground up to render flawlessly across desktop screens, tablets, and smartphones.',
            ],
            [
                'order' => 4,
                'question_id' => 'Bisa memilih template sesuai kategori brand saya?',
                'question_en' => 'Can I filter templates by my brand category?',
                'answer_id' => 'Bisa. Delapan kategori brand khusus tersedia — Muslimah & Modest Wear, Boutique Luxury, Casual & Streetwear, Uniforms & Workwear, Traditional & Ethnic Wear, Activewear, Kids & Baby, serta Footwear, Bags & Accessories. Gunakan filter kategori atau kolom pencarian untuk menemukan yang paling cocok.',
                'answer_en' => 'Yes. Choose from eight dedicated categories to find curated styles that match your industry aesthetic.',
            ],
            [
                'order' => 5,
                'question_id' => 'Apakah saya perlu bisa coding untuk memakainya?',
                'question_en' => 'Do I need technical skills to use these templates?',
                'answer_id' => 'Tidak perlu. Semua template berdiri mandiri tanpa framework dan tanpa backend — Anda tinggal mengisi foto produk dan informasi brand. Butuh penyesuaian lebih lanjut? Tim kami siap membantu personalisasinya.',
                'answer_en' => 'None at all. Templates are standalone, cleanly architected HTML/CSS/JS that can be personalized directly or customized with our team.',
            ],
            [
                'order' => 6,
                'question_id' => 'Bagaimana cara memulainya?',
                'question_en' => 'How do I get started?',
                'answer_id' => 'Klik tombol "Konsultasi Website" atau "Pilih Paket Website". Ceritakan kebutuhan brand fashion Anda, dan kami akan merekomendasikan template yang paling tepat beserta langkah selanjutnya.',
                'answer_en' => 'Click the "Free Consultation" or "Select a Package" button. Share your vision and we will guide you to the perfect template.',
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::updateOrCreate(['order' => $faq['order']], $faq);
        }
    }
}
