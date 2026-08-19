<!DOCTYPE html>
<html>
<head>
    <title>Typography Theming</title>
    <style>
        :root {
            /* С шрифтами */
            --primary-font: "Georgia", serif; /* для абзацев */
            --secondary-font: "Arial", sans-serif; /* для заголовков */

            /* 1. Переменные размеров шрифта */
            --h1-size: 2.5rem;
            --h2-size: 1.75rem;

            /* 1. Переменные цветов (избегаем чисто черного #000) */
            --text-color: #333333;       /* Мягкий темно-серый для текста */
            --heading-color: #1a2a3a;    /* Глубокий темно-синий для акцента */
        }

        body {
            font-family: var(--primary-font);
            color: var(--text-color); /* 2. Применение к основному тексту */
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }

        /* 2. Применение переменных к заголовкам h1 и h2 */
        h1, h2 {
            font-family: var(--secondary-font);
            color: var(--heading-color); 
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 700;
        }

        h1 {
            font-size: var(--h1-size);
            margin-top: 0; /* Убираем верхний отступ для самого первого заголовка */
        }

        h2 {
            font-size: var(--h2-size);
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 1.2em;
        }

        .blog-post {
            max-width: 700px;
            margin: 0 auto;
            background: #fff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
    </style>
</head>
<body>

    <div class="blog-post">
        <h1>The Beauty of Typography in Web Design</h1>
        <p>Typography plays a crucial role in how users read and experience content online. A good choice of fonts and sizes can make a website more readable and enjoyable.</p>

        <h2>Why Typography Matters</h2>
        <p>Clear and consistent typography improves accessibility, creates a visual hierarchy, and gives your website a professional feel. Without it, even the best design can look unpolished.</p>

        <h2>Mobile-First Typography</h2>
        <p>Starting with smaller, readable text for mobile and scaling up for desktops ensures your content looks great on any device. This approach is part of mobile-first design and theming.</p>
    </div>

</body>
</html>
