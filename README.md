# ⚡ Apex State & Theme Synchronizer
### همگام‌ساز پیشرفته استیت و تم (مبتنی بر LocalStorage)

A lightweight, high-performance DOM manipulation module implementing persistent client-side state using Web Storage API (`localStorage`) and CSS dataset theme toggling.  
این پروژه یک ماژول سبک و پرسرعت برای دستکاری DOM است که با استفاده از وب استوریج (`localStorage`) و تم‌های مبتنی بر `dataset`، وضعیت کاربر را در سمت کلاینت پایدار نگه می‌دارد.

---

## 🛠 Features / ویژگی‌ها

- **Dynamic State Persistence / پایداری پویا استیت:** ذخیره و بازیابی نام کاربر در سشن‌های مختلف مرورگر بدون پرش در رابط کاربری.
- **Data-Theme Swapping Engine / موتور تغییر تم:** مدیریت مدرن پوسته‌ها با استفاده از ویژگی‌های `data-theme` در HTML5 (شامل تم‌های تاریک **Obsidian** و بنفش نئونی **Neon Violet**).
- **Input Sanitization / اعتبارسنجی ورودی:** پاکسازی فاصله‌های اضافی (`trim()`) و بررسی خالی نبودن ورودی قبل از ثبت در حافظه دیسک.
- **State Invalidation / بازنشانی استیت:** حذف اتمیک کلیدهای خاص (`localStorage.removeItem`) و بازگشت به حالت پیش‌فرض.

---

## 🧠 Technical Overview & Architecture / معماری و مشخصات فنی

### Storage Keys Schema / جدول کلیدهای ذخیره‌سازی
| Key (کلید) | Type (نوع) | Value Range (مقادیر) | Purpose (هدف) |
| :--- | :--- | :--- | :--- |
| `userName` | `String` | متن غیرخالی | ذخیره نام/کدنام کاربر برای خوش‌آمدگویی |
| `appTheme` | `String` | `'obsidian'` \| `'neon-violet'` | تعیین تم بصری ریشه سند |

### Theme Implementation / نحوه پیاده‌سازی تم
```javascript
// تزریق پویای دیتا-تم در جاوااسکریپت
document.body.dataset.theme = 'neon-violet';
