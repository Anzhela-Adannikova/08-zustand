<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

Створено репозиторій 08-zustand.
При здачі роботи надаються два посилання: на вихідні файли (репозиторій) та на робочу сторінку завдання, розгорнуту на Vercel.
Проєкт створено за допомогою Next.js (App Router).
Усі компоненти, які не прив'язані безпосередньо до маршруту та їх частин, зберігаються в папці components, кожен — у власній папці, з файлами:
файл компонента з розширенням .tsx (наприклад, Header.tsx);
файл стилів з такою самою назвою, що й компонент, з розширенням .module.css (наприклад, Header.module.css).
Загальні типи та інтерфейси винесені до файлу types/note.ts.
Функції роботи з API винесені в lib/api/ у вигляді окремих модулів.
Для HTTP-запитів використовується бібліотека axios.
Стан запитів у CSR-компонентах керується через TanStack Query (React Query).
Усі компоненти типізовані з використанням TypeScript.
Код має бути відформатований за допомогою Prettier.
Стилізація — за допомогою CSS Modules.
У проєкті реалізована підтримка SSR та CSR відповідно до завдання.

Стилі для всіх компонентів і сторінок вже створені. Скопіюй їх із цього репозиторію: https://github.com/goitacademy/react-notehub-styles/tree/hw-08. Після створення своїх сторінок і компонентів скопіюй відповідні .module.css файли у відповідні папки в /app.

Опрацювання SEO

У цьому завданні ви маєте покращити видимість вашого застосунку в пошукових системах, налаштувавши SEO-метаінформацію для всіх сторінок проєкту NoteHub.

Використовуйте можливості App Router та функцію generateMetadata, що доступна у page.tsx кожного маршруту.

Meta теги та Open Graph для кожної сторінки

Для файлу головного layout вашого проєкту app\\layout.tsx реалізуйте експорт об’єкта metadata з полями title, description. Значення цих полів мають містити назву і короткий опис вашого застосунка. Додайте також Open Graph мета-теги title, description, url та images (зображення можна вказати це https://ac.goit.global/fullstack/react/notehub-og-meta.jpg) з відповідними значеннями.

Для файлу сторінки app\\not-found.tsx реалізуйте експорт об’єкта metadata з полями title, description та url. Значення цих полів мають містити назву і короткий опис сторінки з вказанням того, що такої сторінки не існує. Додайте також Open Graph мета-теги title, description, url та imagesз відповідними значеннями.

Для файлу сторінки app\\notes\\filter\\[...slug]\\page.tsx реалізуйте експорт асинхронної функції generateMetadata, яка повертатиме об'єкт з полями title та description. Значення цих полів мають містити назву і короткий опис сторінки з вказанням обраного фільтру. Додайте також Open Graph мета-теги title, description, url та imagesз відповідними значеннями.

Для файлу сторінки з деталями app\\notes\\[id]\\page.tsx реалізуйте експорт асинхронної функції generateMetadata, яка повертатиме об'єкт з полями title та description. Значення цих полів мають містити заголовок і короткий опис відповідної нотатки. Додайте також Open Graph мета-теги title, description, url та imagesз відповідними значеннями.

Підключення шрифта Roboto

Підключіть шрифт Roboto глобально для всього застосунку у файлі app/layout.tsx. Для цього скористайтеся вбудованою підтримкою з next/font/google, обовʼязково вказавши відповідні налаштування (weight, variable, display та subsets).

Створення однієї нотатки та збереження чернетки

Перенесіть логіку створення нової нотатки із модального вікна на окремий маршрут app\\notes\\action\\create\\page.tsx. Компонент сторінки CreateNote має створювати наступну розмітку:

<main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   {/* NoteForm component */}
  </div>
</main>

Внесіть зміну у клієнтський компонент сторінки NotesClient, тепер нам в ньому не потрібна логіка з модалкою. Кнопка Create note + тепер має бути посиланням, яке веде на маршрут /notes/action/create.

Внесіть зміни у компонент components\\NoteForm\\NoteForm.tsx, він має створювати таку ж розмітку, як і раніше, але для цього вам потрібно використовувати не Formik, а стандартні HTML-форми з formAction, щоб надалі зручно інтегрувати збереження чернетки через Zustand не створюючи зайву і складну логіку.

Для файлу сторінки app\\notes\\action\\create\\page.tsx реалізуйте експорт об’єкта metadata з полями title, description та url. Значення цих полів мають містити назву і короткий опис сторінки для створення нової нотатки. Додайте також Open Graph мета-теги title, description, url та imagesз відповідними значеннями.

Збереження draft нотатки у процесі її створення

Вам потрібно доповнити функціонал створення нотатки так, щоб під час заповнення полів форми в компоненті components\\NoteForm\\NoteForm.tsx автоматично зберігалася «чернетка» (draft) за допомогою Zustand. Це дозволить користувачу не втрачати незбережені зміни та при повторному відкритті форми побачити останній збережений стан.

Створіть у папці lib/store файл noteStore.ts і реалізуйте в ньому Zustand-стор з наступними функціями:

draft: об’єкт, що містить тимчасові дані форми нотатки (title, content, tag).
setDraft(note): функція для оновлення полів чернетки.
clearDraft(): функція для очищення чернетки до початкового стану. У якості початкового стану використовуйте наступний об’єкт

const initialDraft = {
title: '',
content: '',
tag: 'Todo',
};

Інтегруйте цей стор у компонент NoteForm. Щоразу при переході на маршрут /notes/action/create перевіряйте, чи існує draft в Zustand. Якщо draft є — завантажуйте саме його в початкові значення форми, якщо немає — то в початкові значення форми підставляйте об’єкт initialDraft.

У процесі створенні нотатки всі зміни мають зберігатися у draft в Zustand одразу при зміні полів. Для цього використайте подію елементів форми onChange і викликайте setDraft у сторі з актуальними даними.

При сабміті форми, коли нотатку успішно створено на сервері, очистіть draft через метод clearDraft. При цьому користувач має повернутися на попередній маршрут.

При натисканні кнопки «Cancel» draft не має очищатися, щоб можна було повернутися до створення пізніше з попереднім прогресом. При цьому користувач має повернутися на попередній маршрут.

Реалізуйте збереження чернетки нотатки в localStorage за допомогою middleware persist з пакету zustand/middleware. Це дозволить зберігати стан draft навіть після перезавантаження сторінки.
