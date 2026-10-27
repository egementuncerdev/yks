# Netlik — YKS çalışma programı

**yks.egementuncer.dev** · Ücretsiz, hesap gerektirmeyen YKS çalışma asistanı. Öğrenci 8 soruya cevap verir; puan türüne, sınava kalan süreye, günlük boş saatlerine ve ders seviyelerine göre gün gün program oluşur. Konu testleri her sorunun çözümüyle gelir.

## Çalıştırma

```bash
npm install
npm run dev        # geliştirme
npm test           # testler
npm run build      # tsc + vite build → dist/
npm run deploy     # build + wrangler deploy (Cloudflare Workers static assets)
```

## Yapı

| Klasör | İçerik |
|---|---|
| `src/content/exam.ts` | Testler, soru sayıları, puan türleri, varsayılan (tahmini) sınav tarihi |
| `src/content/subjects.ts` | Dersler, konular, konu hacmi, “sık sorulan” işaretleri, MEB kaynakları |
| `src/content/questions/` | Soru motoru: `core.ts` (tohumlu rastgele, kesir, şık), üreticiler (`tytMat.ts`, `science.ts`), elle yazılmış sorular (`bank.ts`) |
| `src/content/lessons/` | Konu anlatımları, ders başına bir dosya (`tyt-tr.ts` …); anahtar konu adıdır. Her ders ayrı parça olarak yüklenir |
| `src/lib/planner.ts` | Program oluşturucu (saf fonksiyon, testli) |
| `src/lib/storage.ts` | IndexedDB (Dexie): profil, konu durumları, program, test sonuçları, yanlışlar, yedek |
| `src/features/` | Ekranlar: tanıtım, kurulum, bugün, hafta, konular, anlatımlar, testler, ayarlar |

## Güncelleme notları

- **ÖSYM 2027 takvimi açıklanınca:** `src/content/exam.ts` içinde `DEFAULT_EXAM_DATE` ve `EXAM_DATE_IS_OFFICIAL = true`.
- **Kılavuz değişirse:** `TESTS` (test ve ders soru sayıları). Test, toplamların sınav soru sayısıyla tuttuğunu kontrol eder.
- **Yeni soru:** elle yazılmışsa `bank.ts` (doğru cevap ilk şık); hesaplamalıysa ilgili dosyaya üretici. `npm test` her üreticiyi 300 tohumla dener.
- **Konu anlatımı:** `src/content/lessons/<ders>.ts` içinde konu adıyla. Test, her konunun anlatımı olduğunu ve adların `subjects.ts` ile tuttuğunu kontrol eder. İpuçları: `src/content/questions/hints.ts` (BANK ile aynı sıra).
- **İçerik listesi:** `REVIEW=1 npx vitest run src/content/questions/review.test.ts` → `CONTENT_REVIEW.md`.
- Konu id'leri ilerleme kaydında kullanılır; konu adını değiştirirken eski id'yi koru.
