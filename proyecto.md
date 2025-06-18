<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Interactivo - Iván Zarate | Especialista en Implementación de IA</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0f172a; /* slate-900 */
            color: #cbd5e1; /* slate-300 */
        }

        .gradient-text {
            background: linear-gradient(to right, #5eead4, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .card {
            background-color: rgba(30, 41, 59, 0.5); /* slate-800 with transparency */
            border: 1px solid #334155; /* slate-700 */
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 25px rgba(94, 234, 212, 0.2);
            border-color: #5eead4;
        }

        .tag {
            display: inline-block;
            background-color: #1e293b; /* slate-800 */
            color: #94a3b8; /* slate-400 */
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-weight: 500;
            font-size: 0.875rem;
            border: 1px solid #334155; /* slate-700 */
            transition: all 0.3s ease;
        }
        
        .tag:hover {
            color: #e2e8f0; /* slate-200 */
            background-color: #334155; /* slate-700 */
            border-color: #5eead4;
        }

        .timeline-item {
            position: relative;
            padding-left: 2.5rem;
            padding-bottom: 2rem;
            border-left: 2px solid #334155; /* slate-700 */
        }
        
        .timeline-item:last-child {
            border-left: 2px solid transparent;
            padding-bottom: 0;
        }

        .timeline-dot {
            position: absolute;
            left: -0.5rem;
            top: 0.25rem;
            height: 1rem;
            width: 1rem;
            background-color: #0f172a; /* slate-900 */
            border-radius: 9999px;
            border: 3px solid #38bdf8; /* sky-500 */
            transition: all 0.3s ease;
        }
        
        .timeline-item:hover .timeline-dot {
             transform: scale(1.2);
             box-shadow: 0 0 10px #38bdf8;
        }

        /* Animation for scroll */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }

    </style>
</head>
<body class="antialiased">

    <div class="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <main class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            <!-- Left Column (Sidebar) -->
            <aside class="lg:col-span-1 lg:sticky top-8 h-fit space-y-8">
                <section class="reveal card p-6 rounded-xl text-center">
                    <img src="https://placehold.co/400x400/0f172a/e2e8f0?text=IZ" alt="Foto de Iván Zarate" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 shadow-lg">
                    <h1 class="text-3xl font-bold text-white">Iván Zarate</h1>
                    <h2 class="text-md font-medium gradient-text mt-1">Especialista en Estrategia e Implementación de IA</h2>
                    <div class="mt-6 space-y-3 text-sm text-slate-400">
                        <p class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill mr-2 text-sky-400" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.803V4.697l-5.803 3.546z"/></svg>
                            ivan.zarate.95@gmail.com
                        </p>
                        <p class="flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill mr-2 text-sky-400" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.28 1.465l-2.135 2.135a1.745 1.745 0 0 0-.414 1.258c.264.455.631.902 1.13 1.401.5.499.946.865 1.401 1.13.484.17.986.034 1.258-.414l2.135-2.135c.491-.165.974-.048 1.465.28l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03.002-2.137.702-2.877L1.885.511z"/></svg>
                            11-40973159
                        </p>
                    </div>
                </section>
                
                <section class="reveal card p-6 rounded-xl">
                    <h3 class="text-lg font-bold text-white mb-4">Competencias Clave</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="tag">Estrategia de IA</span>
                        <span class="tag">Integración de APIs</span>
                        <span class="tag">LLMs (ChatGPT, Gemini)</span>
                        <span class="tag">Python</span>
                        <span class="tag">JSON</span>
                        <span class="tag">Automatización de Procesos</span>
                        <span class="tag">Liderazgo de Equipos</span>
                        <span class="tag">Análisis de Datos</span>
                        <span class="tag">Resolución de Problemas</span>
                    </div>
                </section>
                
                <section class="reveal card p-6 rounded-xl">
                    <h3 class="text-lg font-bold text-white mb-4">Idiomas</h3>
                    <div class="space-y-2">
                        <p><strong class="font-semibold text-slate-200">Español:</strong> Nativo</p>
                        <p><strong class="font-semibold text-slate-200">Inglés:</strong> Nivel Intermedio (B1)</p>
                    </div>
                </section>
            </aside>

            <!-- Right Column (Main Content) -->
            <div class="lg:col-span-2 space-y-8">
                <section class="reveal card p-8 rounded-xl">
                    <h3 class="text-2xl font-bold text-white mb-4">Perfil Profesional</h3>
                    <p class="text-lg text-slate-300 leading-relaxed">
                        Profesional creativo y autónomo con una fuerte orientación a la resolución de problemas complejos mediante la <strong class="font-semibold text-teal-300">aplicación estratégica de Inteligencia Artificial</strong>. Mi experiencia como Analista de Sistemas y Coordinador de área técnica me ha dado la capacidad de comprender flujos de trabajo, identificar ineficiencias y <strong class="font-semibold text-teal-300">diseñar e integrar soluciones tecnológicas que optimizan procesos, reducen costos y potencian el rendimiento</strong>. Busco liderar iniciativas de alto impacto donde la IA sea el motor para hacer mucho más, más rápido y mejor.
                    </p>
                </section>

                <section class="reveal">
                    <h3 class="text-2xl font-bold text-white mb-6">Experiencia Profesional</h3>
                    <div class="relative">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <p class="text-sm font-medium text-sky-400">Actualidad</p>
                            <h4 class="font-bold text-xl text-white mt-1">Data & System Analyst / Coordinador de Área Técnica</h4>
                            <p class="font-semibold text-slate-400">Ministerio de Seguridad Nacional</p>
                            <ul class="list-disc list-outside mt-3 ml-5 space-y-2 text-slate-400">
                                <li>Lidero la coordinación del área técnica, supervisando el análisis y desarrollo de sistemas.</li>
                                <li>Aplico análisis de datos para <strong class="font-semibold text-slate-200">identificar oportunidades de optimización</strong> en procesos críticos.</li>
                                <li>Diseño e implemento soluciones que integran tecnologías y APIs para <strong class="font-semibold text-slate-200">automatizar la recolección y análisis de información</strong>.</li>
                                <li>Responsable de planificar el flujo de tareas del equipo para garantizar la entrega de prototipos funcionales.</li>
                            </ul>
                        </div>
                        <div class="timeline-item">
                           <div class="timeline-dot"></div>
                            <p class="text-sm font-medium text-sky-400">2016 - Actualidad</p>
                            <h4 class="font-bold text-xl text-white mt-1">Oficial de Policía Federal</h4>
                            <p class="font-semibold text-slate-400">Policía Federal Argentina</p>
                            <ul class="list-disc list-outside mt-3 ml-5 space-y-2 text-slate-400">
                                <li>Desarrollo de habilidades de resolución de problemas bajo presión y trabajo en equipos multidisciplinarios.</li>
                                <li>Comprensión profunda de procesos en organizaciones complejas, fundamental para la automatización.</li>
                            </ul>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <p class="text-sm font-medium text-sky-400">2013 - 2015</p>
                            <h4 class="font-bold text-xl text-white mt-1">Auxiliar Administrativo</h4>
                            <p class="font-semibold text-slate-400">COTO CICSA</p>
                            <ul class="list-disc list-outside mt-3 ml-5 space-y-2 text-slate-400">
                                <li>Experiencia en procesos administrativos y de RRHH, base para comprender áreas a optimizar con IA.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="reveal">
                     <h3 class="text-2xl font-bold text-white mb-6">Formación Académica</h3>
                     <div class="space-y-6">
                        <div class="card p-6 rounded-xl">
                            <h4 class="font-bold text-lg text-white">Analista de Sistemas</h4>
                            <p class="font-semibold text-sky-400">Instituto Superior ORT</p>
                            <p class="text-slate-400 mt-2">Formación clave en la arquitectura y lógica de sistemas, esencial para la integración de soluciones de IA.</p>
                        </div>
                        <div class="card p-6 rounded-xl">
                            <h4 class="font-bold text-lg text-white">Licenciatura en Investigación Criminal</h4>
                            <p class="font-semibold text-sky-400">Instituto Universitario de la PFA</p>
                            <p class="text-slate-400 mt-2">Desarrollo de una mentalidad analítica y metódica para la resolución de problemas complejos.</p>
                        </div>
                     </div>
                </section>
            </div>
        </main>
    </div>

    <script>
        // Script para animaciones al hacer scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Opcional: para que la animación solo ocurra una vez
                    }
                });
            }, {
                threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
            });

            const elementsToReveal = document.querySelectorAll('.reveal');
            elementsToReveal.forEach(element => {
                observer.observe(element);
            });
        });
    </script>
</body>
</html>