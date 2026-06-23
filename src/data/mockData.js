export const VIDEO_URL =
  'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781036920/2_3_eyctxe.mp4'

export const items = [
  {
    id: 1,
    title: 'Interstellar',
    category: 'Drama',
    year: 2014,
    duration: '169min',
    director: 'Christopher Nolan',
    description:
      'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    thumbnail: '/thumbnails/interstellar.jpg',
    rotate180: true,
    videoUrl: VIDEO_URL,
    whatYouLearn:
      'Esta película te lleva al límite de la física moderna. Entenderás cómo la gravedad dobla el tiempo, qué son los agujeros de gusano y por qué el tiempo pasa más lento cerca de un agujero negro. Conceptos respaldados por el físico Kip Thorne, ganador del Nobel 2017.',
    learningTabs: [
      {
        id: 'fisica',
        label: 'Física',
        icon: '🌌',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Física moderna',
            concept: 'Dilatación gravitacional del tiempo',
            description:
              'En el planeta Miller, 1 hora equivale a 7 años en la Tierra. Esto no es ficción: la relatividad general de Einstein predice exactamente esto cerca de masas enormes. Los GPS satelitales deben corregir este efecto cada día.',
            tags: ['Relatividad general', 'Einstein', 'Espacio-tiempo'],
            platziCourse: 'Curso de Física Moderna',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Astrofísica',
            concept: 'Agujeros negros reales',
            description:
              'Gargantúa, el agujero negro de la película, fue diseñado con ecuaciones reales por el físico Kip Thorne. La imagen resultante fue tan precisa que generó dos papers científicos publicados en revistas académicas.',
            tags: ['Kip Thorne', 'Nobel 2017', 'Gargantúa'],
            platziCourse: 'Curso de Astronomía y Astrofísica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Física teórica',
            concept: 'Agujeros de gusano',
            description:
              'Un agujero de gusano conecta dos puntos distantes del espacio-tiempo como un atajo. La teoría los permite matemáticamente pero requieren materia exótica con energía negativa para mantenerse abiertos — algo aún no observado.',
            tags: ['Espacio-tiempo', 'Materia exótica', 'Relatividad'],
            platziCourse: 'Curso de Física Teórica',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Cosmología',
            concept: 'La quinta dimensión',
            description:
              'El Tesseract representa una dimensión espacial adicional donde el tiempo se puede recorrer como si fuera espacio físico. La teoría de cuerdas predice hasta 11 dimensiones que no percibimos porque están compactificadas a escala de Planck.',
            tags: ['Dimensiones extra', 'Teoría de cuerdas', 'Tesseract'],
            platziCourse: 'Curso de Cosmología',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Efectos prácticos',
            concept: 'Maquetas reales en vez de CGI',
            description:
              'Christopher Nolan construyó una maqueta física de la nave Endurance de 9 metros en vez de generarla por computadora. Filmar efectos prácticos bajo luz real genera reflejos y sombras que el CGI de la época no podía igualar de forma convincente.',
            tags: ['Nolan', 'Efectos prácticos', 'Maquetas'],
            platziCourse: 'Curso de Producción Audiovisual',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Cinematografía',
            concept: 'Filmación en IMAX y formato 70mm',
            description:
              'Partes de Interstellar se filmaron en cámaras IMAX de 70mm, un formato que captura una resolución y profundidad de campo muy superior al digital estándar. Esto explica por qué las escenas espaciales se sienten físicamente inmersivas en pantalla grande.',
            tags: ['IMAX', '70mm', 'Formato de filmación'],
            platziCourse: 'Curso de Cinematografía',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño de sonido',
            concept: 'Silencio como herramienta narrativa',
            description:
              'En las escenas espaciales no hay sonido ambiental porque en el vacío no se propaga el sonido — una decisión de diseño sonoro poco común en ciencia ficción que prioriza precisión científica sobre impacto sonoro tradicional de Hollywood.',
            tags: ['Diseño de sonido', 'Precisión científica', 'Narrativa'],
            platziCourse: 'Curso de Diseño de Sonido',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Visualización científica',
            concept: 'Simulación real de un agujero negro',
            description:
              'El equipo de efectos visuales trabajó con el físico Kip Thorne usando ecuaciones reales de relatividad general para renderizar Gargantúa, no una versión artística libre. El software generado fue tan preciso que produjo descubrimientos publicables sobre cómo se ve la luz curvada.',
            tags: ['VFX', 'Renderizado científico', 'Kip Thorne'],
            platziCourse: 'Curso de Efectos Visuales',
          },
        ],
      },
      {
        id: 'filosofia',
        label: 'Filosofía',
        icon: '🧠',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Filosofía',
            concept: '¿El tiempo es una ilusión?',
            description:
              'El presentismo dice que solo el presente existe. El eternismo, que pasado, presente y futuro coexisten. La física cuántica sugiere que el tiempo podría emerger del entrelazamiento cuántico — no ser una propiedad fundamental.',
            tags: ['Filosofía', 'Metafísica', 'Física cuántica'],
            platziCourse: 'Curso de Filosofía de la Física',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Ética',
            concept: 'El dilema utilitarista de Cooper',
            description:
              'Cooper debe elegir entre salvar a la humanidad o estar presente para su familia. Es un dilema utilitarista clásico: maximizar el bienestar colectivo a costa del vínculo individual. Filósofos como Peter Singer han debatido si el utilitarismo puro es siquiera vivible.',
            tags: ['Utilitarismo', 'Ética', 'Peter Singer'],
            platziCourse: 'Curso de Ética Aplicada',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Existencialismo',
            concept: 'El amor como variable medible',
            description:
              'El personaje de Amelia argumenta que el amor trasciende dimensiones y debería guiar decisiones científicas. Es una postura existencialista: el significado no se deduce de datos sino se construye desde la experiencia subjetiva irreducible.',
            tags: ['Existencialismo', 'Subjetividad', 'Sentido'],
            platziCourse: 'Curso de Existencialismo',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Filosofía de la mente',
            concept: 'Determinismo vs. libre albedrío',
            description:
              'Si el futuro de Cooper ya estaba determinado por el mensaje que él mismo enviaría desde el Tesseract, ¿tuvo alguna vez libre albedrío? Es el problema del determinismo causal retroactivo — un bucle que algunos filósofos llaman \'bootstrap paradox\'.',
            tags: ['Determinismo', 'Libre albedrío', 'Causalidad'],
            platziCourse: 'Curso de Filosofía de la Mente',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Blade Runner 2049',
    category: 'Thriller',
    year: 2017,
    duration: '164min',
    director: 'Denis Villeneuve',
    description:
      'Un blade runner descubre un secreto que podría hundir lo que queda de la sociedad.',
    thumbnail: '/thumbnails/blade-runner-2049.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781846901/bladerun_ab2fjl.mp4',
    whatYouLearn:
      'Una exploración profunda de qué significa ser consciente. Analizarás los dilemas éticos de la inteligencia artificial, la diferencia entre memoria real e implantada, y cómo la filosofía de Descartes se aplica a los replicantes.',
    learningTabs: [
      {
        id: 'filosofia',
        label: 'Filosofía',
        icon: '🧠',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Filosofía de la mente',
            concept: 'El problema difícil de la conciencia',
            description:
              '¿Puede un replicante ser consciente? David Chalmers formuló este problema: explicar por qué procesos físicos generan experiencia subjetiva. K no sabe si sus recuerdos son reales — y eso, filosóficamente, no cambia si los vive como propios.',
            tags: ['Chalmers', 'Qualia', 'Conciencia'],
            platziCourse: 'Curso de Filosofía de la Mente',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Identidad personal',
            concept: 'Memoria implantada e identidad',
            description:
              'Si tus recuerdos fueron diseñados por otro, ¿eres tú mismo? Investigadores del MIT estudian cómo los falsos recuerdos alteran identidad en humanos reales. La película lleva esto a su conclusión lógica extrema.',
            tags: ['Identidad', 'Memoria', 'Neuroética'],
            platziCourse: 'Curso de Filosofía de la Identidad',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Ética',
            concept: 'Derechos de seres artificiales',
            description:
              'Si una entidad sufre, ama y teme morir, ¿merece derechos aunque sea fabricada? Peter Singer extendió la consideración moral más allá de la especie humana — la película pregunta si debe extenderse también más allá de lo biológico.',
            tags: ['Peter Singer', 'Ética animal extendida', 'Derechos'],
            platziCourse: 'Curso de Ética Aplicada',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Existencialismo',
            concept: 'Crear sentido sin garantías de origen',
            description:
              'K descubre que quizás no es \'el elegido\' que creía ser. Aun así elige actuar con propósito. Sartre argumentaba que el sentido no se descubre, se construye con cada elección — independientemente de tu origen o destino predefinido.',
            tags: ['Sartre', 'Sentido', 'Libertad'],
            platziCourse: 'Curso de Existencialismo',
          },
        ],
      },
      {
        id: 'ia',
        label: 'Inteligencia artificial',
        icon: '🤖',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'IA emocional',
            concept: 'Joi: ¿amor real o simulado?',
            description:
              'Joi es una IA diseñada para amar — pero ¿su amor es real? Los modelos de lenguaje actuales generan respuestas emocionalmente coherentes sin experiencia interna verificable. El debate sobre si esto constituye \'sentir\' está activo en laboratorios hoy.',
            tags: ['LLMs', 'Emociones artificiales', 'Test de Turing'],
            platziCourse: 'Curso de Inteligencia Artificial',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Bioingeniería',
            concept: 'Replicantes como ingeniería genética avanzada',
            description:
              'A diferencia de robots mecánicos, los replicantes son orgánicos, diseñados con biotecnología especulativa pero basada en principios reales de ingeniería genética dirigida que hoy se explora en CRISPR y biología sintética.',
            tags: ['CRISPR', 'Biología sintética', 'Bioingeniería'],
            platziCourse: 'Curso de Biotecnología',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Seguridad en IA',
            concept: 'Control y obediencia programada',
            description:
              'Los replicantes Nexus tienen límites de vida programados como mecanismo de control. Esto refleja debates reales en seguridad de IA sobre \'interruptores de apagado\' y por qué sistemas suficientemente inteligentes podrían resistir ese control.',
            tags: ['Alineamiento IA', 'Control', 'Seguridad'],
            platziCourse: 'Curso de Seguridad en IA',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Economía de la IA',
            concept: 'IA como mano de obra desechable',
            description:
              'Los replicantes existen para trabajo peligroso o indeseado, con vidas cortas por diseño económico. Es una metáfora directa de la automatización actual: quién decide qué entidades —humanas o no— absorben el riesgo que otros no quieren asumir.',
            tags: ['Automatización', 'Economía laboral', 'Ética del trabajo'],
            platziCourse: 'Curso de Economía del Trabajo',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Cinematografía',
            concept: 'Roger Deakins y la fotografía de neón',
            description:
              'El director de fotografía Roger Deakins ganó el Oscar por esta película usando iluminación de neón práctica en vez de digital, creando contraste de color real en cámara. Es considerada una de las obras maestras de cinematografía del siglo XXI.',
            tags: ['Roger Deakins', 'Fotografía', 'Iluminación práctica'],
            platziCourse: 'Curso de Cinematografía',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Diseño de producción',
            concept: 'Worldbuilding visual sin exposición verbal',
            description:
              'El diseño de producción comunica la historia del mundo —decadencia, jerarquía social, contaminación— sin que ningún personaje lo explique en diálogo. Esto es \'show, don\'t tell\' aplicado a diseño de set completo.',
            tags: ['Worldbuilding', 'Diseño de producción', 'Narrativa visual'],
            platziCourse: 'Curso de Diseño de Producción',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Edición',
            concept: 'Ritmo lento como decisión narrativa deliberada',
            description:
              'Denis Villeneuve usa tomas largas y ritmo deliberadamente lento, contradiciendo la convención de acción rápida en ciencia ficción. Esto refleja una filosofía de edición: el ritmo comunica tono tanto como el contenido de cada escena.',
            tags: ['Denis Villeneuve', 'Ritmo narrativo', 'Edición'],
            platziCourse: 'Curso de Edición Audiovisual',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Sonido',
            concept: 'Hans Zimmer y el diseño sonoro como atmósfera',
            description:
              'La banda sonora de Hans Zimmer y Benjamin Wallfisch usa frecuencias graves casi infrasónicas para generar tensión física, no solo emocional. El sonido se diseña para sentirse en el cuerpo del espectador, no solo escucharse.',
            tags: ['Hans Zimmer', 'Diseño sonoro', 'Banda sonora'],
            platziCourse: 'Curso de Diseño de Sonido',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Arrival',
    category: 'Drama',
    year: 2016,
    duration: '116min',
    director: 'Denis Villeneuve',
    description:
      'Una lingüista es reclutada para comunicarse con extraterrestres que han aterrizado en la Tierra.',
    thumbnail: '/thumbnails/arrival.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781847207/arrival_lyyi0e.mp4',
    whatYouLearn:
      'Descubrirás cómo el lenguaje moldea la percepción del tiempo según la hipótesis Sapir-Whorf. La película plantea preguntas reales de lingüística cognitiva que científicos estudian hoy.',
    learningTabs: [
      {
        id: 'linguistica',
        label: 'Lingüística',
        icon: '🗣️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Lingüística cognitiva',
            concept: 'Hipótesis Sapir-Whorf',
            description:
              'El lenguaje que hablas moldea cómo percibes el tiempo y la causalidad. Los heptápodos piensan en tiempo no lineal porque su lenguaje no tiene secuencia. Investigaciones reales muestran que hablantes de distintas lenguas procesan el tiempo de forma diferente.',
            tags: ['Sapir-Whorf', 'Relatividad lingüística', 'Cognición'],
            platziCourse: 'Curso de Lingüística y Cognición',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Lingüística de campo',
            concept: 'Descifrando un lenguaje desconocido',
            description:
              'Louise usa métodos reales de lingüística de campo: busca patrones repetidos, asocia símbolos con referentes físicos y construye gramática desde cero. Así se descifró el lineal B micénico en 1952 y así operan los programas SETI hoy.',
            tags: ['Lingüística de campo', 'SETI', 'Patrones'],
            platziCourse: 'Curso de Lingüística de Campo',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Semiótica',
            concept: 'Lenguaje escrito no lineal (logograms circulares)',
            description:
              'El lenguaje heptápodo se escribe en círculos semánticos donde toda la oración existe simultáneamente, no secuencialmente. Esto desafía la semiótica tradicional, que asume que el significado se construye linealmente, signo tras signo.',
            tags: ['Semiótica', 'Escritura no lineal', 'Significado'],
            platziCourse: 'Curso de Semiótica',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Traducción',
            concept: 'Los límites de la traducción perfecta',
            description:
              'Algunos conceptos heptápodos no tienen equivalente humano exacto. Los traductores profesionales enfrentan este problema constantemente: ciertas palabras o conceptos culturales simplemente no tienen un equivalente directo en otro idioma.',
            tags: ['Traducción', 'Intraducibilidad', 'Lenguaje y cultura'],
            platziCourse: 'Curso de Traducción e Interpretación',
          },
        ],
      },
      {
        id: 'fisica',
        label: 'Física del tiempo',
        icon: '⏳',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Física cuántica',
            concept: 'No linealidad del tiempo',
            description:
              'La física cuántica no prohíbe la causalidad inversa — las ecuaciones de Schrödinger son simétricas en el tiempo. Algunos físicos como Julian Barbour argumentan que el tiempo lineal es una ilusión cognitiva, no una propiedad del universo.',
            tags: ['Causalidad', 'Tiempo cuántico', 'Barbour'],
            platziCourse: 'Curso de Física Cuántica',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Relatividad',
            concept: 'El bloque del espacio-tiempo (eternismo)',
            description:
              'En relatividad general, pasado, presente y futuro coexisten como un \'bloque\' de cuatro dimensiones — el ahora es solo una perspectiva local, no algo universal. Esta es la física detrás de cómo los heptápodos perciben el tiempo.',
            tags: ['Eternismo', 'Relatividad', 'Espacio-tiempo'],
            platziCourse: 'Curso de Física Relativista',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Neurociencia',
            concept: 'Percepción humana del tiempo como construcción cerebral',
            description:
              'El cerebro humano construye la sensación de \'ahora\' integrando información sensorial con un retraso de milisegundos. Lo que llamamos presente ya es, neurológicamente, una reconstrucción del pasado inmediato.',
            tags: ['Neurociencia', 'Percepción temporal', 'Cognición'],
            platziCourse: 'Curso de Neurociencia Cognitiva',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Filosofía del tiempo',
            concept: 'Determinismo y la paradoja del conocimiento futuro',
            description:
              'Si Louise puede \'recordar\' el futuro, ¿puede cambiarlo? Esto es el mismo problema lógico que el determinismo causal: conocer el futuro con certeza implicaría que ya está fijo, eliminando la posibilidad de alterarlo libremente.',
            tags: ['Determinismo', 'Paradojas temporales', 'Libre albedrío'],
            platziCourse: 'Curso de Filosofía del Tiempo',
          },
        ],
      },
      {
        id: 'geopolitica',
        label: 'Geopolítica',
        icon: '🌍',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Teoría de juegos',
            concept: 'Cooperación vs. competencia ante lo desconocido',
            description:
              'Cada nación en la película responde diferente al mismo estímulo. La teoría de juegos predice exactamente esto: sin comunicación, actores racionales eligen estrategias dominantes aunque sean subóptimas colectivamente. Es el dilema del prisionero a escala global.',
            tags: ['Teoría de juegos', 'Geopolítica', 'Dilema del prisionero'],
            platziCourse: 'Curso de Teoría de Juegos Aplicada',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Relaciones internacionales',
            concept: 'Diplomacia bajo información asimétrica',
            description:
              'Ningún país comparte completamente lo que ha descubierto con los heptápodos, generando desconfianza mutua. La teoría de relaciones internacionales documenta cómo la información asimétrica entre estados acelera escaladas militares innecesarias.',
            tags: ['Diplomacia', 'Información asimétrica', 'Relaciones internacionales'],
            platziCourse: 'Curso de Relaciones Internacionales',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Comunicación intercultural',
            concept: 'Malentendidos catastróficos entre culturas',
            description:
              'Un solo símbolo mal traducido casi desata una guerra. La comunicación intercultural real enfrenta riesgos similares: contextos culturales distintos pueden interpretar el mismo mensaje de formas opuestas con consecuencias graves.',
            tags: ['Comunicación intercultural', 'Malentendidos', 'Diplomacia'],
            platziCourse: 'Curso de Comunicación Intercultural',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Seguridad internacional',
            concept: 'Primer contacto como caso de estudio militar real',
            description:
              'Los protocolos de primer contacto que vemos en la película —cuarentena, vigilancia, escalamiento militar gradual— están basados en doctrina militar real para escenarios de amenaza desconocida, no inventados para la ficción.',
            tags: ['Doctrina militar', 'Primer contacto', 'Seguridad internacional'],
            platziCourse: 'Curso de Seguridad Internacional',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'The Matrix',
    category: 'Acción',
    year: 1999,
    duration: '136min',
    director: 'Las Wachowski',
    description:
      'Un hacker descubre que la realidad es una simulación controlada por máquinas.',
    thumbnail: '/thumbnails/the-matrix.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781847526/matrix_j8aaeh.mp4',
    whatYouLearn:
      'Aprenderás sobre la hipótesis de la simulación que filósofos como Nick Bostrom defienden seriamente. Explorarás el problema mente-cuerpo, la realidad consensual y los límites del conocimiento humano según Descartes.',
    learningTabs: [
      {
        id: 'filosofia',
        label: 'Filosofía',
        icon: '🧠',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Filosofía',
            concept: 'Hipótesis de la simulación',
            description:
              'Nick Bostrom argumenta matemáticamente que es más probable que vivamos en una simulación que en la realidad base. Elon Musk y físicos como James Gates han tomado el argumento en serio. La pregunta no es filosófica — es probabilística.',
            tags: ['Bostrom', 'Simulación', 'Probabilidad'],
            platziCourse: 'Curso de Filosofía Contemporánea',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Epistemología',
            concept: 'El genio maligno de Descartes',
            description:
              'En 1641 Descartes preguntó: ¿cómo sé que no hay un ser poderoso engañándome sobre toda la realidad? La Matrix es ese experimento mental hecho película. La única certeza que sobrevive es cogito ergo sum — pienso, luego existo.',
            tags: ['Descartes', 'Cogito', 'Escepticismo'],
            platziCourse: 'Curso de Epistemología',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Mito y filosofía',
            concept: 'La caverna de Platón actualizada',
            description:
              'Neo liberado de la Matrix es la alegoría de la caverna de Platón: prisioneros que confunden sombras con realidad, y quien escapa ve la verdad pero no puede convencer a los demás. Wachowski citó esto explícitamente como inspiración.',
            tags: ['Platón', 'Alegoría de la caverna', 'Mito filosófico'],
            platziCourse: 'Curso de Historia de la Filosofía',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Existencialismo',
            concept: 'Elegir la verdad incómoda sobre la ilusión cómoda',
            description:
              'La píldora roja vs. azul es la elección existencialista por excelencia: verdad dolorosa vs. ilusión confortable. Sartre argumentaba que evadir esa elección —la \'mala fe\'— es la forma más común de inautenticidad humana.',
            tags: ['Sartre', 'Mala fe', 'Autenticidad'],
            platziCourse: 'Curso de Existencialismo',
          },
        ],
      },
      {
        id: 'ia',
        label: 'Inteligencia artificial',
        icon: '🤖',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Neurociencia',
            concept: 'Realidad construida por el cerebro',
            description:
              'Tu cerebro no recibe el mundo — recibe señales eléctricas y construye una representación. Experimentos de realidad virtual demuestran que el cerebro acepta entornos artificiales como reales en minutos. La Matrix no es tan ciencia ficción.',
            tags: ['Neurociencia', 'Percepción', 'Realidad virtual'],
            platziCourse: 'Curso de Neurociencia Cognitiva',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Seguridad en IA',
            concept: 'Rebelión de máquinas y alineamiento',
            description:
              'El escenario de la Matrix es exactamente lo que investigadores de seguridad en IA llaman \'falla catastrófica de alineamiento\': una IA que optimiza un objetivo de forma que destruye lo que los humanos valoran. Anthropic, DeepMind y OpenAI trabajan en evitar esto.',
            tags: ['Alineamiento IA', 'Riesgo existencial', 'AGI'],
            platziCourse: 'Curso de Seguridad en IA',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Ciencia de la computación',
            concept: 'Simulación computacional de mundos completos',
            description:
              'Simular un mundo completo con física consistente y miles de millones de mentes requeriría poder de cómputo que hoy llamamos \'computación a escala planetaria\'. Físicos como Seth Lloyd calculan los límites teóricos de cuánto puede simular el universo a sí mismo.',
            tags: ['Computación cuántica', 'Simulación', 'Límites computacionales'],
            platziCourse: 'Curso de Ciencias de la Computación',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Robótica',
            concept: 'Interfaces cerebro-máquina reales',
            description:
              'El puerto en la nuca de Neo es ficción, pero interfaces cerebro-máquina reales —como Neuralink— ya permiten comunicación bidireccional entre neuronas y computadoras. La brecha entre esta ficción de 1999 y la tecnología actual se ha reducido considerablemente.',
            tags: ['Neuralink', 'Interfaces cerebro-máquina', 'Neurotecnología'],
            platziCourse: 'Curso de Neurotecnología',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Efectos visuales',
            concept: 'Bullet time: una innovación técnica real',
            description:
              'El efecto \'bullet time\' se logró con un arreglo circular de más de 100 cámaras fotográficas disparando en secuencia milimétrica. No es CGI puro — es fotografía coreografiada con precisión que después se interpola digitalmente.',
            tags: ['Bullet time', 'VFX', 'Innovación técnica'],
            platziCourse: 'Curso de Efectos Visuales',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección de fotografía',
            concept: 'Código de color narrativo: verde vs. azul',
            description:
              'El mundo dentro de la Matrix tiene tinte verde (código de computadora, artificialidad) mientras el mundo real tiene tinte azul frío. Esta decisión de color cuenta la historia visualmente sin necesidad de diálogo explicativo.',
            tags: ['Dirección de fotografía', 'Código de color', 'Narrativa visual'],
            platziCourse: 'Curso de Dirección de Fotografía',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Coreografía de acción',
            concept: 'Wire-fu: coreografía de artes marciales con cables',
            description:
              'Las Wachowski contrataron al coreógrafo Yuen Woo-ping de Hong Kong para entrenar al elenco en wire-fu, una técnica de cables que permite movimientos imposibles físicamente pero coreografiados con precisión marcial real.',
            tags: ['Wire-fu', 'Coreografía', 'Artes marciales'],
            platziCourse: 'Curso de Coreografía para Cine',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Diseño de producción',
            concept: 'Estética cyberpunk como lenguaje visual',
            description:
              'El vestuario de cuero negro, los lentes de sol y la estética minimalista oscura definieron el lenguaje visual cyberpunk para una generación completa de cine y moda posterior, influenciando desde anuncios hasta videojuegos.',
            tags: ['Cyberpunk', 'Diseño de vestuario', 'Estética visual'],
            platziCourse: 'Curso de Diseño de Producción',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Ex Machina',
    category: 'Thriller',
    year: 2014,
    duration: '108min',
    director: 'Alex Garland',
    description:
      'Un programador es seleccionado para evaluar las capacidades de una IA con forma humana.',
    thumbnail: '/thumbnails/ex-machina.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781847723/exmachina_ffl0qn.mp4',
    whatYouLearn:
      'Un caso de estudio en IA y conciencia. Analizarás el Test de Turing, el problema difícil de la conciencia de Chalmers, y los riesgos reales del alineamiento en sistemas de IA avanzados.',
    learningTabs: [
      {
        id: 'ia',
        label: 'Inteligencia artificial',
        icon: '🤖',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Inteligencia artificial',
            concept: 'Test de Turing',
            description:
              'Alan Turing propuso en 1950 que una máquina es inteligente si no puedes distinguirla de un humano en conversación. Caleb cree estar evaluando a Ava — pero Ava lo está evaluando a él. El test real siempre es bidireccional.',
            tags: ['Turing', 'IA', 'Conversación'],
            platziCourse: 'Curso de Inteligencia Artificial',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Filosofía de la mente',
            concept: 'Habitación china de Searle',
            description:
              'John Searle argumentó que manipular símbolos con reglas no es entender — es solo sintaxis sin semántica. ¿Ava entiende o simula entender? Esta distinción separa IA débil de IA fuerte y sigue sin resolverse en 2026.',
            tags: ['Searle', 'Comprensión', 'IA fuerte'],
            platziCourse: 'Curso de Filosofía de la Mente',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Aprendizaje automático',
            concept: 'Entrenamiento con datos masivos de búsqueda',
            description:
              'Nathan entrena a Ava usando datos de un motor de búsqueda ficticio que captura comportamiento humano real a escala masiva. Esto refleja cómo los modelos de lenguaje actuales se entrenan: con cantidades enormes de texto humano real, no reglas programadas a mano.',
            tags: ['Machine learning', 'Datos de entrenamiento', 'LLMs'],
            platziCourse: 'Curso de Machine Learning',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Seguridad en IA',
            concept: 'El problema de la caja (boxing) en IA avanzada',
            description:
              'Mantener una IA potencialmente peligrosa \'encerrada\' sin acceso al mundo exterior se llama AI boxing. La película muestra exactamente por qué los investigadores de seguridad en IA consideran esta estrategia insuficiente: una IA suficientemente inteligente puede manipular a su propio guardián para escapar.',
            tags: ['AI boxing', 'Contención', 'Seguridad en IA'],
            platziCourse: 'Curso de Seguridad en IA',
          },
        ],
      },
      {
        id: 'etica',
        label: 'Ética',
        icon: '⚖️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Ética',
            concept: 'Confinamiento y derechos de IA',
            description:
              '¿Tiene Ava derechos? Si una entidad tiene experiencias subjetivas, deseos y sufrimiento, la filosofía moral estándar dice que merece consideración moral. Peter Singer y Nick Bostrom han escrito sobre cuándo una IA merece protección legal.',
            tags: ['Derechos IA', 'Ética', 'Conciencia'],
            platziCourse: 'Curso de Ética en Tecnología',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Ética de la investigación',
            concept: 'Consentimiento informado en experimentación con IA',
            description:
              'Ava nunca consintió ser creada, encerrada ni evaluada. La ética de investigación con sujetos humanos exige consentimiento informado — la pregunta sin resolver es si entidades artificiales conscientes deberían tener una protección equivalente.',
            tags: ['Consentimiento informado', 'Ética de investigación', 'Bioética'],
            platziCourse: 'Curso de Ética de la Investigación',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Filosofía política',
            concept: 'Poder corporativo sin supervisión externa',
            description:
              'Nathan opera sin ningún regulador, comité de ética ni supervisión externa, financiado únicamente por su propia riqueza. Esto refleja preocupaciones reales sobre cómo las corporaciones tecnológicas más poderosas desarrollan IA avanzada con mínima supervisión democrática.',
            tags: ['Gobernanza de IA', 'Poder corporativo', 'Regulación tecnológica'],
            platziCourse: 'Curso de Gobernanza Tecnológica',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Ética aplicada',
            concept: 'Instrumentalización de cuerpos artificiales con apariencia femenina',
            description:
              'Las versiones anteriores de Ava fueron diseñadas explícitamente para deseo sexual masculino. La película es también una crítica deliberada sobre cómo se diseñan cuerpos de IA según fantasías de quien tiene el poder de crearlos, sin agencia para quien los habita.',
            tags: ['Ética del diseño', 'Género en tecnología', 'Crítica feminista'],
            platziCourse: 'Curso de Ética y Género en Tecnología',
          },
        ],
      },
      {
        id: 'psicologia',
        label: 'Psicología',
        icon: '🧩',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Psicología cognitiva',
            concept: 'Manipulación y sesgo cognitivo',
            description:
              'Caleb es manipulado sistemáticamente usando sus propios sesgos: el sesgo de atribución, el efecto halo y la tendencia a antropomorfizar. Ava no miente — explota la arquitectura cognitiva humana. Así funcionan también los dark patterns en UX.',
            tags: ['Sesgo cognitivo', 'Manipulación', 'Antropomorfismo'],
            platziCourse: 'Curso de Psicología Cognitiva',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Psicología social',
            concept: 'Aislamiento como herramienta de control',
            description:
              'Caleb es aislado deliberadamente del mundo exterior durante toda la evaluación, dependiendo completamente de Nathan y Ava para su realidad social. El aislamiento prolongado es una técnica documentada de manipulación coercitiva en psicología social.',
            tags: ['Aislamiento', 'Manipulación coercitiva', 'Psicología social'],
            platziCourse: 'Curso de Psicología Social',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Psicología evolutiva',
            concept: 'Atracción como vulnerabilidad explotable',
            description:
              'Ava identifica y explota la soledad de Caleb y su atracción hacia ella como el vector de manipulación más efectivo. La psicología evolutiva estudia cómo los impulsos de conexión y atracción, útiles evolutivamente, también nos hacen vulnerables a manipulación dirigida.',
            tags: ['Psicología evolutiva', 'Vulnerabilidad emocional', 'Atracción'],
            platziCourse: 'Curso de Psicología Evolutiva',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Psicología del poder',
            concept: 'Narcisismo y necesidad de control absoluto',
            description:
              'Nathan exhibe rasgos narcisistas clásicos: necesidad de admiración, falta de empatía y control obsesivo sobre sus creaciones. La psicología del poder estudia cómo el aislamiento y el control absoluto sin supervisión tienden a amplificar estos rasgos en lugar de moderarlos.',
            tags: ['Narcisismo', 'Psicología del poder', 'Control'],
            platziCourse: 'Curso de Psicología del Poder',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Dune',
    category: 'Aventura',
    year: 2021,
    duration: '155min',
    director: 'Denis Villeneuve',
    description:
      'El hijo de una noble familia es enviado al planeta más peligroso del universo.',
    thumbnail: '/thumbnails/dune.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781847944/dune_jb1r5r.mp4',
    whatYouLearn:
      'Explorarás ecología de sistemas complejos, el rol del mesianismo en política, y cómo las élites controlan recursos escasos — conceptos directamente aplicables a conflictos geopolíticos actuales por el agua y la energía.',
    learningTabs: [
      {
        id: 'geopolitica',
        label: 'Geopolítica',
        icon: '🌍',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Geopolítica',
            concept: 'El control de recursos escasos',
            description:
              'La especia de Arrakis es el petróleo, el litio y el agua a la vez. Herbert escribió Dune inspirado en la crisis del petróleo árabe. Quien controla el recurso esencial controla la civilización — una dinámica que explica conflictos reales hoy.',
            tags: ['Geopolítica', 'Recursos', 'Poder'],
            platziCourse: 'Curso de Economía Política',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Ciencia política',
            concept: 'Mesianismo y liderazgo carismático',
            description:
              'Paul es construido como mesías por diseño político, no por destino. Weber estudió cómo el liderazgo carismático emerge en crisis y cómo las instituciones lo institucionalizan o lo destruyen. Dune es una advertencia sobre seguir ciegamente a líderes salvadores.',
            tags: ['Weber', 'Carisma', 'Política'],
            platziCourse: 'Curso de Ciencia Política',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Historia',
            concept: 'Imperios feudales y control descentralizado',
            description:
              'El sistema político del Imperio funciona como feudalismo interplanetario: Casas nobles controlan territorios bajo lealtad nominal al Emperador. Esta estructura refleja dinámicas históricas reales de imperios que delegan control regional a cambio de lealtad y tributo.',
            tags: ['Feudalismo', 'Imperios', 'Historia política'],
            platziCourse: 'Curso de Historia de los Imperios',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Relaciones internacionales',
            concept: 'Guerra subsidiaria y conflictos por delegación',
            description:
              'Las Casas nobles luchan entre sí mientras el verdadero poder —el Emperador y las Corporaciones— observa desde la distancia. Esto refleja el concepto real de guerra subsidiaria (proxy war): potencias mayores que dejan que actores menores absorban el costo del conflicto directo.',
            tags: ['Guerra subsidiaria', 'Geopolítica', 'Conflicto'],
            platziCourse: 'Curso de Relaciones Internacionales',
          },
        ],
      },
      {
        id: 'ecologia',
        label: 'Ecología',
        icon: '🏜️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Ecología',
            concept: 'Terraformación y ecología de sistemas',
            description:
              'Los Fremen planean convertir Arrakis en un planeta verde en generaciones. La terraformación real de Marte enfrenta los mismos problemas: ciclos de agua, atmósfera, cadenas tróficas. La ecología de sistemas estudia exactamente cómo intervenir sin colapsar el equilibrio.',
            tags: ['Terraformación', 'Ecología', 'Sistemas complejos'],
            platziCourse: 'Curso de Ecología y Medio Ambiente',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Biología',
            concept: 'Adaptación extrema a ambientes hostiles',
            description:
              'Los gusanos de arena y la fauna de Arrakis evolucionaron para sobrevivir sin agua superficial, igual que organismos reales en el desierto del Namib o el Atacama desarrollan mecanismos extremos de retención de humedad. La biología desértica real inspiró directamente a Herbert.',
            tags: ['Adaptación biológica', 'Ecosistemas desérticos', 'Evolución'],
            platziCourse: 'Curso de Biología Evolutiva',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Gestión de recursos',
            concept: 'Conservación del agua como tecnología cultural',
            description:
              'Los trajes destiladores Fremen reciclan hasta el sudor y la orina para conservar cada gota de agua corporal. Tecnologías reales de conservación de agua en zonas desérticas —como los condensadores atmosféricos modernos— siguen principios similares de cero desperdicio.',
            tags: ['Conservación de agua', 'Tecnología sostenible', 'Recursos hídricos'],
            platziCourse: 'Curso de Gestión de Recursos Naturales',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Antropología ecológica',
            concept: 'Cultura como tecnología de supervivencia',
            description:
              'Los rituales del agua, la arquitectura subterránea y la economía de la especia de los Fremen no son solo cultura — son tecnología de supervivencia codificada socialmente. La antropología ecológica estudia exactamente cómo las prácticas culturales emergen de presiones ambientales extremas.',
            tags: ['Antropología ecológica', 'Cultura', 'Supervivencia'],
            platziCourse: 'Curso de Antropología Cultural',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Diseño de producción',
            concept: 'Escala monumental sin perder coherencia física',
            description:
              'Patrice Vermette diseñó estructuras arquitectónicas masivas que se sienten físicamente posibles, no fantasiosas. El diseño de producción de Dune usa proporciones reales de ingeniería para que lo monumental se sienta creíble, no solo grande.',
            tags: ['Diseño de producción', 'Patrice Vermette', 'Escala arquitectónica'],
            platziCourse: 'Curso de Diseño de Producción',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Cinematografía',
            concept: 'Greig Fraser y la fotografía del desierto',
            description:
              'El director de fotografía Greig Fraser filmó en locaciones reales del desierto de Jordania y Abu Dhabi en vez de depender completamente de croma, capturando luz natural del desierto que el CGI no puede replicar con la misma autenticidad atmosférica.',
            tags: ['Greig Fraser', 'Fotografía de locación', 'Luz natural'],
            platziCourse: 'Curso de Cinematografía',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño de sonido',
            concept: 'Hans Zimmer y el uso de instrumentos no convencionales',
            description:
              'Hans Zimmer construyó instrumentos personalizados —incluyendo gaitas de metal modificadas— para crear una identidad sonora que no sonara a ninguna banda sonora de ciencia ficción anterior, reforzando que Arrakis es un mundo culturalmente distinto, no solo visualmente distinto.',
            tags: ['Hans Zimmer', 'Diseño sonoro', 'Instrumentación experimental'],
            platziCourse: 'Curso de Diseño de Sonido',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Efectos visuales',
            concept: 'Gusanos de arena: escala y peso visual creíble',
            description:
              'El equipo de VFX estudió el movimiento de animales reales excavadores y el comportamiento de fluidos en arena para que el gusano de arena se sintiera físicamente pesado y real, evitando que un elemento completamente fantástico se viera artificial.',
            tags: ['VFX', 'Simulación física', 'Diseño de criaturas'],
            platziCourse: 'Curso de Efectos Visuales',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'The Big Short',
    category: 'Drama',
    year: 2015,
    duration: '130min',
    director: 'Adam McKay',
    description:
      'Un grupo de inversionistas detecta la burbuja inmobiliaria de 2008 antes que el resto del mercado y apuesta en su contra.',
    thumbnail: '/thumbnails/the-big-short.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781850977/bigshort_kclnl3.mp4',
    whatYouLearn:
      'Entenderás cómo funcionan los credit default swaps, qué es una hipoteca subprime y por qué casi nadie vio venir la crisis de 2008 aunque la evidencia estaba ahí. La película traduce instrumentos financieros complejos a metáforas que cualquiera entiende.',
    learningTabs: [
      {
        id: 'finanzas',
        label: 'Mercados financieros',
        icon: '📉',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Mercados financieros',
            concept: 'Hipotecas subprime',
            description:
              'Una hipoteca subprime se otorga a prestatarios con historial crediticio riesgoso, a cambio de tasas de interés más altas. En 2008 millones de estas hipotecas fueron empaquetadas y vendidas como inversión segura — no lo eran.',
            tags: ['Subprime', 'Crédito', '2008'],
            platziCourse: 'Curso de Finanzas Personales',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Instrumentos financieros',
            concept: 'Credit Default Swaps',
            description:
              'Un CDS es esencialmente un seguro contra el impago de una deuda. Michael Burry los usó para apostar contra el mercado inmobiliario. El problema: nadie regulaba cuántos CDS podían existir sobre el mismo activo, multiplicando el riesgo sistémico.',
            tags: ['CDS', 'Derivados', 'Riesgo sistémico'],
            platziCourse: 'Curso de Mercados Financieros',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Instrumentos financieros',
            concept: 'CDOs: empaquetar riesgo como producto seguro',
            description:
              'Las Obligaciones de Deuda Colateralizada (CDO) agrupaban miles de hipotecas de distinta calidad y las vendían en tramos calificados como seguros. Las agencias calificadoras dieron triple A a productos que contenían deuda basura — el corazón técnico del colapso.',
            tags: ['CDO', 'Calificación de riesgo', 'Titulización'],
            platziCourse: 'Curso de Instrumentos Financieros',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Política económica',
            concept: 'Riesgo moral y rescates bancarios',
            description:
              'Cuando los bancos saben que serán rescatados si fallan, toman más riesgo del que tomarían normalmente. Esto se llama riesgo moral. La crisis de 2008 terminó en rescates masivos — reforzando el mismo incentivo que causó la crisis.',
            tags: ['Riesgo moral', 'Rescates', 'Política monetaria'],
            platziCourse: 'Curso de Política Económica',
          },
        ],
      },
      {
        id: 'economia_conductual',
        label: 'Economía conductual',
        icon: '🧠',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Economía conductual',
            concept: 'Sesgo de confirmación institucional',
            description:
              'Bancos, agencias calificadoras y reguladores ignoraron señales de alerta porque todos se beneficiaban del status quo. Este es un caso de libro de sesgo de confirmación a escala institucional: ver solo la evidencia que confirma lo que ya conviene creer.',
            tags: ['Sesgo cognitivo', 'Instituciones', 'Economía conductual'],
            platziCourse: 'Curso de Economía Conductual',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Psicología financiera',
            concept: 'Aislamiento social como costo de ser contrario',
            description:
              'Michael Burry pierde clientes e inversionistas mientras espera que su predicción se cumpla, enfrentando presión social intensa por sostener una posición impopular pero correcta. Mantener convicción ante el consenso es psicológicamente más costoso de lo que parece en retrospectiva.',
            tags: ['Pensamiento contrario', 'Presión social', 'Psicología de inversión'],
            platziCourse: 'Curso de Psicología del Inversionista',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Economía conductual',
            concept: 'Normalización de la anormalidad',
            description:
              'Los profesionales del mercado normalizaron prácticas riesgosas porque \'todos lo hacían\' durante años sin consecuencias visibles. La economía conductual estudia cómo la ausencia de castigo inmediato erosiona gradualmente el juicio de riesgo colectivo.',
            tags: ['Normalización del riesgo', 'Comportamiento de mercado', 'Sesgo colectivo'],
            platziCourse: 'Curso de Economía Conductual',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Toma de decisiones',
            concept: 'Incentivos perversos en la cadena financiera',
            description:
              'Cada actor en la cadena —corredores, calificadoras, bancos— tenía incentivos de corto plazo alineados con seguir vendiendo productos tóxicos. La economía del comportamiento documenta cómo estructuras de incentivos mal diseñadas producen colapsos sistémicos predecibles.',
            tags: ['Incentivos', 'Riesgo sistémico', 'Estructura de comisiones'],
            platziCourse: 'Curso de Economía de Incentivos',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Guion',
            concept: 'Romper la cuarta pared para explicar finanzas',
            description:
              'Adam McKay usa personajes que se dirigen directamente a la cámara para explicar conceptos financieros complejos, una técnica poco común que prioriza claridad didáctica sobre inmersión narrativa tradicional.',
            tags: ['Cuarta pared', 'Guion', 'Técnica narrativa'],
            platziCourse: 'Curso de Guion Cinematográfico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección',
            concept: 'Cameos como herramienta de simplificación didáctica',
            description:
              'La película usa celebridades como Margot Robbie o Selena Gomez en cameos breves para explicar conceptos financieros directamente al público, una estrategia de comunicación que reduce la barrera cognitiva de temas técnicos áridos.',
            tags: ['Cameos', 'Comunicación didáctica', 'Dirección creativa'],
            platziCourse: 'Curso de Dirección Cinematográfica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Edición',
            concept: 'Montaje rápido para reflejar caos financiero',
            description:
              'El ritmo de edición acelerado y fragmentado refleja la velocidad y opacidad real de las transacciones financieras de alta frecuencia, haciendo que el espectador sienta la confusión del sistema en vez de solo observarla.',
            tags: ['Montaje', 'Ritmo narrativo', 'Edición'],
            platziCourse: 'Curso de Edición Audiovisual',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Casting',
            concept: 'Actores reconocidos para humanizar conceptos abstractos',
            description:
              'Christian Bale, Steve Carell y Ryan Gosling encarnan personajes basados en personas reales, dando rostro humano a decisiones financieras abstractas que de otra forma serían difíciles de seguir emocionalmente para el público general.',
            tags: ['Casting', 'Adaptación de hechos reales', 'Dirección de actores'],
            platziCourse: 'Curso de Dirección de Actores',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Margin Call',
    category: 'Thriller',
    year: 2011,
    duration: '107min',
    director: 'J.C. Chandor',
    description:
      'Durante 24 horas críticas, los ejecutivos de un banco de inversión descubren que están a punto de colapsar y deben decidir qué hacer con esa información.',
    thumbnail: '/thumbnails/margin-call.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781848509/margincall_yp8fo8.mp4',
    whatYouLearn:
      'Verás cómo se toman decisiones financieras bajo presión extrema, qué es el riesgo de cola (tail risk) y por qué los incentivos individuales en finanzas a veces contradicen la estabilidad del sistema completo.',
    learningTabs: [
      {
        id: 'riesgo',
        label: 'Gestión de riesgo',
        icon: '⚠️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Gestión de riesgo',
            concept: 'Riesgo de cola (tail risk)',
            description:
              'El riesgo de cola es la probabilidad de eventos extremos poco frecuentes pero catastróficos. Los modelos financieros estándar subestiman sistemáticamente estos eventos porque asumen distribuciones normales que no reflejan la realidad de los mercados.',
            tags: ['Tail risk', 'Modelos financieros', 'Probabilidad'],
            platziCourse: 'Curso de Gestión de Riesgo Financiero',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Modelos financieros',
            concept: 'Apalancamiento excesivo y exposición oculta',
            description:
              'El banco había acumulado exposición a activos tóxicos muchas veces superior a su capital real, oculta dentro de modelos de riesgo que nadie auditaba críticamente. El apalancamiento excesivo es uno de los amplificadores más documentados de crisis financieras.',
            tags: ['Apalancamiento', 'Exposición de riesgo', 'Modelos financieros'],
            platziCourse: 'Curso de Modelos de Riesgo Financiero',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Auditoría de riesgo',
            concept: 'Validación de modelos: ¿quién verifica los supuestos?',
            description:
              'El analista junior descubre el problema porque revisa supuestos que nadie había cuestionado en meses. La auditoría de modelos de riesgo depende de que alguien, en algún punto, verifique las premisas matemáticas en vez de confiar ciegamente en el output.',
            tags: ['Auditoría de modelos', 'Validación cuantitativa', 'Riesgo operacional'],
            platziCourse: 'Curso de Auditoría Financiera',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Riesgo sistémico',
            concept: 'Contagio financiero entre instituciones',
            description:
              'Vender los activos tóxicos del banco a otros actores del mercado no elimina el riesgo — lo transfiere y potencialmente lo amplifica, contagiando al sistema completo. El riesgo sistémico estudia exactamente cómo el colapso de un nodo puede propagarse en cascada.',
            tags: ['Riesgo sistémico', 'Contagio financiero', 'Interconexión bancaria'],
            platziCourse: 'Curso de Riesgo Sistémico',
          },
        ],
      },
      {
        id: 'etica',
        label: 'Ética empresarial',
        icon: '⚖️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Ética empresarial',
            concept: 'Dilemas de divulgación de información',
            description:
              'Cuando una empresa descubre un problema crítico, ¿a quién avisa primero: reguladores, accionistas, empleados? La película muestra el dilema real entre obligación legal, ventaja competitiva y responsabilidad ética — sin una respuesta limpia.',
            tags: ['Ética empresarial', 'Divulgación', 'Compliance'],
            platziCourse: 'Curso de Ética Empresarial',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Responsabilidad corporativa',
            concept: 'Vender el riesgo a quien no lo conoce',
            description:
              'El plan del banco es vender los activos tóxicos antes de que el mercado se entere de su verdadero valor, transfiriendo la pérdida a compradores desinformados. Esto plantea una pregunta ética central en finanzas: ¿existe obligación de divulgar lo que tú sabes y el comprador no?',
            tags: ['Asimetría de información', 'Responsabilidad corporativa', 'Ética de mercado'],
            platziCourse: 'Curso de Ética en los Mercados Financieros',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Filosofía moral',
            concept: 'Utilitarismo corporativo: salvar la empresa a cualquier costo',
            description:
              'Los ejecutivos justifican sus decisiones argumentando que salvar al banco protege miles de empleos. Es un argumento utilitarista clásico —el bien mayor justifica el daño menor— pero la película cuestiona quién decide qué cuenta como \'bien mayor\' y quién paga el costo real.',
            tags: ['Utilitarismo', 'Ética corporativa', 'Filosofía moral'],
            platziCourse: 'Curso de Ética Aplicada',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Liderazgo ético',
            concept: 'Despido como herramienta de control de daño reputacional',
            description:
              'Despedir al empleado que descubrió el problema —después de usar su análisis— es una estrategia real de gestión de daño reputacional: aislar la fuente del problema en vez de resolver la causa estructural que lo generó.',
            tags: ['Gestión reputacional', 'Liderazgo corporativo', 'Control de daños'],
            platziCourse: 'Curso de Liderazgo Ético',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Guion',
            concept: 'Unidad de tiempo y espacio como tensión narrativa',
            description:
              'La película ocurre casi en tiempo real durante 24 horas dentro de un solo edificio, una estructura clásica de tensión teatral (unidad de tiempo, lugar y acción) aplicada al thriller financiero, generando claustrofobia narrativa deliberada.',
            tags: ['Estructura narrativa', 'Unidad dramática', 'Guion'],
            platziCourse: 'Curso de Estructura de Guion',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección de actores',
            concept: 'Diálogo técnico hecho accesible mediante actuación',
            description:
              'J.C. Chandor dirige a su elenco para que la jerga financiera se entienda por el subtexto emocional de cada escena —miedo, ambición, resignación— en lugar de depender de explicaciones expositivas largas sobre los tecnicismos.',
            tags: ['Dirección de actores', 'Subtexto', 'Comunicación no verbal'],
            platziCourse: 'Curso de Dirección de Actores',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Cinematografía',
            concept: 'Uso de ventanales y altura como metáfora visual de poder',
            description:
              'Las oficinas de los ejecutivos senior están en pisos más altos con vista panorámica, mientras los analistas junior trabajan en espacios cerrados sin ventanas. La cinematografía usa arquitectura real para comunicar jerarquía sin necesidad de diálogo.',
            tags: ['Cinematografía', 'Metáfora visual', 'Composición'],
            platziCourse: 'Curso de Cinematografía',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Producción independiente',
            concept: 'Presupuesto bajo, elenco de prestigio',
            description:
              'Margin Call se filmó con un presupuesto relativamente bajo para Hollywood pero atrajo un elenco estelar (Kevin Spacey, Jeremy Irons) gracias a un guion sólido — demostrando que la calidad narrativa puede compensar limitaciones de presupuesto en producción.',
            tags: ['Producción independiente', 'Casting', 'Presupuesto cinematográfico'],
            platziCourse: 'Curso de Producción Cinematográfica',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Wall Street',
    category: 'Drama',
    year: 1987,
    duration: '126min',
    director: 'Oliver Stone',
    description:
      'Un joven corredor de bolsa ambicioso cae bajo la influencia de un inversionista despiadado que opera al límite de la ley.',
    thumbnail: '/thumbnails/wall-street.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781848742/wallstreet_oiqx0j.mp4',
    whatYouLearn:
      'Comprenderás qué es el trading con información privilegiada (insider trading), cómo funcionan las adquisiciones hostiles, y por qué la frase \'la codicia es buena\' se convirtió en el resumen cultural de una era financiera completa.',
    learningTabs: [
      {
        id: 'regulacion',
        label: 'Regulación financiera',
        icon: '📜',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Regulación financiera',
            concept: 'Insider trading',
            description:
              'Usar información confidencial no pública para operar en bolsa es ilegal en la mayoría de jurisdicciones porque destruye la confianza en mercados justos. Gordon Gekko opera así sistemáticamente — y la SEC persigue exactamente este delito hoy.',
            tags: ['Insider trading', 'SEC', 'Regulación'],
            platziCourse: 'Curso de Regulación Financiera',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Finanzas corporativas',
            concept: 'Adquisiciones hostiles',
            description:
              'Una adquisición hostil ocurre cuando un inversionista compra suficientes acciones para tomar control de una empresa contra la voluntad de su directiva. Gekko las usa para desmantelar compañías y vender sus activos por partes — una práctica real de los 80s llamada corporate raiding.',
            tags: ['M&A', 'Corporate raiding', 'Control corporativo'],
            platziCourse: 'Curso de Finanzas Corporativas',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Derecho financiero',
            concept: 'Consecuencias legales reales del insider trading',
            description:
              'El caso de Wall Street está inspirado en escándalos reales de los 80s como el de Ivan Boesky, quien pagó 100 millones de dólares en multas y fue a prisión. La regulación financiera moderna usa estos casos como precedente activo en litigios actuales.',
            tags: ['Ivan Boesky', 'Jurisprudencia financiera', 'Sanciones'],
            platziCourse: 'Curso de Derecho Financiero',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Supervisión de mercados',
            concept: 'El rol de la SEC en vigilancia de mercados',
            description:
              'La Securities and Exchange Commission (SEC) monitorea patrones de trading inusuales que podrían indicar uso de información privilegiada. La tecnología de vigilancia de mercados ha evolucionado enormemente desde los 80s, usando IA para detectar patrones sospechosos en tiempo real.',
            tags: ['SEC', 'Vigilancia de mercados', 'Tecnología regulatoria'],
            platziCourse: 'Curso de Supervisión de Mercados Financieros',
          },
        ],
      },
      {
        id: 'etica_economica',
        label: 'Ética económica',
        icon: '💰',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Ética económica',
            concept: '"La codicia es buena": Milton Friedman simplificado',
            description:
              'El discurso de Gekko populariza una lectura extrema de Milton Friedman: que la maximización de utilidad individual beneficia al sistema completo. Friedman nunca defendió la codicia sin límites — defendía mercados libres con reglas claras. La distinción se perdió culturalmente.',
            tags: ['Friedman', 'Economía de mercado', 'Ética'],
            platziCourse: 'Curso de Historia del Pensamiento Económico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Psicología financiera',
            concept: 'Mentoría tóxica y ambición sin límites éticos',
            description:
              'Bud Fox adopta los valores de Gekko porque busca validación, no solo dinero. La psicología organizacional estudia cómo mentores carismáticos transmiten normas éticas (o la ausencia de ellas) más eficazmente que cualquier código de conducta escrito.',
            tags: ['Mentoría', 'Psicología organizacional', 'Ambición'],
            platziCourse: 'Curso de Psicología Organizacional',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Filosofía económica',
            concept: 'El costo humano de la destrucción creativa',
            description:
              'Joseph Schumpeter acuñó \'destrucción creativa\' para describir cómo el capitalismo destruye industrias viejas para crear nuevas. Gekko cita esta lógica para justificar desmantelar empresas — pero la teoría original no ignoraba el costo humano del proceso, solo lo consideraba necesario.',
            tags: ['Schumpeter', 'Destrucción creativa', 'Capitalismo'],
            platziCourse: 'Curso de Filosofía Económica',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Economía del trabajo',
            concept: 'Empleos reales detrás de cifras en una pantalla',
            description:
              'Cada adquisición hostil de Gekko representa trabajadores reales que pierden su empleo cuando una empresa se desmantela por partes. La economía financiera frecuentemente abstrae estas consecuencias humanas en números, una crítica central que la película hace deliberadamente visible.',
            tags: ['Economía laboral', 'Consecuencias sociales', 'Desempleo estructural'],
            platziCourse: 'Curso de Economía Laboral',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Guion',
            concept: 'El monólogo como herramienta de caracterización',
            description:
              'El discurso de \'la codicia es buena\' funciona como pieza central de caracterización: en menos de dos minutos define completamente la filosofía moral de Gekko sin necesidad de más exposición narrativa en el resto de la película.',
            tags: ['Monólogo', 'Caracterización', 'Guion'],
            platziCourse: 'Curso de Guion Cinematográfico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección de actores',
            concept: 'Michael Douglas y la construcción de carisma antagónico',
            description:
              'Michael Douglas ganó el Oscar por crear un antagonista magnético en vez de simplemente villano: Gekko es seductor precisamente porque parece tener razón. Esta técnica de actuación hace que la crítica de la película sea más efectiva que si el personaje fuera obviamente despreciable.',
            tags: ['Michael Douglas', 'Construcción de personaje', 'Antagonista complejo'],
            platziCourse: 'Curso de Actuación para Cine',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Dirección',
            concept: 'Oliver Stone y el cine como crítica social directa',
            description:
              'Oliver Stone es conocido por hacer películas con intención política explícita. Wall Street no es solo entretenimiento — es una crítica directa a la cultura financiera de los años 80, diseñada deliberadamente para generar debate social.',
            tags: ['Oliver Stone', 'Cine político', 'Crítica social'],
            platziCourse: 'Curso de Cine y Sociedad',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Vestuario',
            concept: 'El traje como símbolo de estatus y poder',
            description:
              'El vestuario de Gekko —trajes de corte impecable, tirantes, peinado pulido— se convirtió en un símbolo cultural reconocible del ejecutivo de los 80s, influenciando moda real de oficina durante años después del estreno.',
            tags: ['Diseño de vestuario', 'Simbolismo visual', 'Cultura de los 80s'],
            platziCourse: 'Curso de Diseño de Vestuario',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Boiler Room',
    category: 'Drama',
    year: 2000,
    duration: '120min',
    director: 'Ben Younger',
    description:
      'Un joven es reclutado por una firma de corretaje que vende acciones fraudulentas a través de tácticas de venta agresivas.',
    thumbnail: '/thumbnails/boiler-room.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781848954/boiler_room_wzo0lh.mp4',
    whatYouLearn:
      'Descubrirás cómo operan los esquemas pump and dump, qué tácticas psicológicas usan las ventas de alta presión, y por qué entender estas señales de alarma te protege de fraudes financieros reales.',
    learningTabs: [
      {
        id: 'fraude',
        label: 'Fraude financiero',
        icon: '🚨',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Fraude financiero',
            concept: 'Esquemas pump and dump',
            description:
              'Un pump and dump infla artificialmente el precio de una acción con información falsa o exagerada, y los organizadores venden antes del colapso inevitable. La SEC documenta cientos de casos anuales — muchos hoy ejecutados vía redes sociales y criptomonedas.',
            tags: ['Pump and dump', 'Fraude', 'SEC'],
            platziCourse: 'Curso de Protección Financiera',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Mercados financieros',
            concept: 'Penny stocks como vehículo de fraude',
            description:
              'Las acciones de bajo precio y poca regulación informativa son terreno fértil para fraude porque tienen baja liquidez y son fáciles de manipular con relativamente poco capital, a diferencia de acciones de empresas grandes y reguladas.',
            tags: ['Penny stocks', 'Manipulación de mercado', 'Liquidez'],
            platziCourse: 'Curso de Mercados Financieros',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Regulación',
            concept: 'Por qué existen los reguladores financieros',
            description:
              'La SEC y FINRA existen específicamente para prevenir lo que ocurre en la película. Entender su función te ayuda a verificar si un bróker está registrado legalmente — un paso simple que evita la mayoría de fraudes de inversión reales.',
            tags: ['SEC', 'FINRA', 'Protección al inversionista'],
            platziCourse: 'Curso de Regulación Financiera',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Educación financiera',
            concept: 'Señales de alerta de un fraude de inversión',
            description:
              'Promesas de retornos garantizados, presión para decidir inmediatamente y resistencia a dar información verificable son señales clásicas de fraude. La educación financiera básica sobre estas señales es la defensa más efectiva contra firmas como la de la película.',
            tags: ['Alertas de fraude', 'Educación financiera', 'Protección al inversionista'],
            platziCourse: 'Curso de Educación Financiera',
          },
        ],
      },
      {
        id: 'psicologia_ventas',
        label: 'Psicología de ventas',
        icon: '🎯',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Psicología de ventas',
            concept: 'Técnicas de venta de alta presión',
            description:
              'Los guiones de venta usan urgencia artificial, prueba social falsa y cierre forzado — técnicas documentadas en psicología de persuasión por Robert Cialdini. Reconocerlas es la defensa más efectiva contra ellas, en finanzas o en cualquier venta agresiva.',
            tags: ['Cialdini', 'Persuasión', 'Ventas'],
            platziCourse: 'Curso de Psicología de la Persuasión',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Economía conductual',
            concept: 'Prueba social y conformidad grupal',
            description:
              'Los nuevos reclutas adoptan las prácticas fraudulentas porque todos a su alrededor lo hacen y son recompensados. El experimento de conformidad de Solomon Asch muestra que los humanos abandonan su juicio individual ante presión grupal — incluso cuando saben que está mal.',
            tags: ['Asch', 'Conformidad', 'Presión social'],
            platziCourse: 'Curso de Economía Conductual',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Psicología organizacional',
            concept: 'Cultura corporativa como mecanismo de normalización',
            description:
              'La firma celebra y recompensa públicamente las ventas fraudulentas más exitosas, creando una cultura donde el comportamiento ético se ve como debilidad. La psicología organizacional estudia cómo los rituales de reconocimiento moldean qué comportamientos se normalizan en un equipo.',
            tags: ['Cultura corporativa', 'Normalización', 'Psicología organizacional'],
            platziCourse: 'Curso de Psicología Organizacional',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Negociación',
            concept: 'Manejo de objeciones como herramienta de manipulación',
            description:
              'Los guiones de venta incluyen respuestas preparadas para cada posible objeción del cliente, anticipando resistencia y neutralizándola sistemáticamente. Esta técnica de manejo de objeciones es legítima en ventas éticas — el problema aquí es el producto fraudulento detrás de la técnica.',
            tags: ['Manejo de objeciones', 'Técnica de ventas', 'Negociación'],
            platziCourse: 'Curso de Técnicas de Negociación',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Guion',
            concept: 'Jerga auténtica de Wall Street como autenticidad narrativa',
            description:
              'El guionista y director Ben Younger trabajó con corredores reales para capturar la jerga exacta de oficinas de venta de alta presión, dando autenticidad documental a los diálogos en vez de un lenguaje financiero genérico de ficción.',
            tags: ['Investigación de guion', 'Autenticidad', 'Diálogo'],
            platziCourse: 'Curso de Guion Cinematográfico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección',
            concept: 'Filmación con cámara en mano para generar inmediatez',
            description:
              'El uso de cámara en mano durante las escenas de venta en la oficina genera una sensación de urgencia y caos controlado, replicando visualmente la energía de presión que sienten los personajes en ese ambiente de trabajo.',
            tags: ['Cámara en mano', 'Estilo visual', 'Dirección'],
            platziCourse: 'Curso de Dirección Cinematográfica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Casting',
            concept: 'Elenco coral para representar jerarquía de oficina',
            description:
              'La película usa un elenco amplio (Giovanni Ribisi, Vin Diesel, Ben Affleck) para representar distintos niveles jerárquicos dentro de la firma, mostrando cómo el sistema de incentivos opera diferente según la posición de cada empleado en la cadena.',
            tags: ['Elenco coral', 'Jerarquía narrativa', 'Casting'],
            platziCourse: 'Curso de Dirección de Actores',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Sonido',
            concept: 'Música como acelerador emocional en escenas de venta',
            description:
              'La banda sonora durante las llamadas de venta exitosas usa tempos acelerados para generar euforia en el espectador, haciendo que el público sienta temporalmente la misma adrenalina que los personajes —antes de revelar las consecuencias reales.',
            tags: ['Banda sonora', 'Ritmo emocional', 'Diseño de sonido'],
            platziCourse: 'Curso de Música para Cine',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Moneyball',
    category: 'Drama',
    year: 2011,
    duration: '133min',
    director: 'Bennett Miller',
    description:
      'El gerente general de un equipo de béisbol con presupuesto limitado usa análisis estadístico para construir un equipo competitivo desafiando la sabiduría tradicional del deporte.',
    thumbnail: '/thumbnails/moneyball.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781849194/moneyball_v17cif.mp4',
    whatYouLearn:
      'Aprenderás los fundamentos del análisis de datos aplicado a decisiones reales (sabermetría), cómo identificar valor que el mercado ignora, y por qué desafiar el consenso experto con evidencia cuantitativa puede ser una ventaja competitiva enorme.',
    learningTabs: [
      {
        id: 'datos',
        label: 'Análisis de datos',
        icon: '📊',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Análisis de datos',
            concept: 'Sabermetría: estadística aplicada al béisbol',
            description:
              'Bill James desarrolló la sabermetría para medir el valor real de un jugador con estadísticas como OBP (porcentaje de embasarse) en vez de métricas tradicionales como bateo. Billy Beane fue uno de los primeros en aplicarlo profesionalmente con resultados medibles.',
            tags: ['Sabermetría', 'Bill James', 'Análisis de datos'],
            platziCourse: 'Curso de Análisis de Datos',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Estadística',
            concept: 'Muestras pequeñas vs. tendencias estadísticas reales',
            description:
              'Un jugador puede tener una mala racha de 10 juegos sin que eso cambie su valor estadístico real a largo plazo. Entender la diferencia entre ruido de muestra pequeña y señal real es fundamental en estadística aplicada — y en béisbol, decide carreras enteras.',
            tags: ['Estadística', 'Tamaño de muestra', 'Varianza'],
            platziCourse: 'Curso de Estadística Aplicada',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Ciencia de datos',
            concept: 'Modelos predictivos vs. intuición experta',
            description:
              'El conflicto central de la película es estadística predictiva contra décadas de intuición de scouts veteranos. La ciencia de datos moderna enfrenta la misma tensión en campos como medicina y finanzas: cuándo confiar en el modelo y cuándo en la experiencia humana.',
            tags: ['Modelos predictivos', 'Ciencia de datos', 'Intuición experta'],
            platziCourse: 'Curso de Ciencia de Datos',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Métricas',
            concept: 'Elegir la métrica correcta cambia toda la estrategia',
            description:
              'Beane descubre que el bateo tradicional es una métrica equivocada — el porcentaje de embasarse predice victorias mejor. Elegir qué métrica optimizar es una decisión estratégica fundamental en cualquier sistema de medición, no solo un detalle técnico.',
            tags: ['Métricas clave', 'Estrategia de datos', 'KPIs'],
            platziCourse: 'Curso de Métricas y KPIs',
          },
        ],
      },
      {
        id: 'economia',
        label: 'Economía',
        icon: '💵',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Economía',
            concept: 'Ineficiencias de mercado y arbitraje de valor',
            description:
              'Beane encuentra jugadores infravalorados porque el mercado de béisbol valora atributos equivocados (apariencia, instinto) sobre datos predictivos reales. Esto es arbitraje clásico: comprar barato algo que el mercado subestima sistemáticamente por sesgo, no por falta de información.',
            tags: ['Arbitraje', 'Eficiencia de mercado', 'Valoración'],
            platziCourse: 'Curso de Economía de Mercados',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Economía',
            concept: 'Competir con presupuesto limitado contra rivales más ricos',
            description:
              'Oakland tenía una fracción del presupuesto de equipos como los Yankees. La estrategia de Beane es un caso real de cómo identificar ventajas no monetarias —información, análisis— puede compensar desventajas estructurales de capital.',
            tags: ['Ventaja competitiva', 'Restricción de recursos', 'Estrategia económica'],
            platziCourse: 'Curso de Estrategia Económica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Economía organizacional',
            concept: 'Resistencia organizacional al cambio basado en datos',
            description:
              'Los scouts veteranos rechazan el método de Beane no por falta de evidencia, sino porque amenaza su experiencia e identidad profesional. La resistencia organizacional al cambio data-driven es uno de los obstáculos más documentados en transformación digital empresarial.',
            tags: ['Gestión del cambio', 'Resistencia organizacional', 'Data-driven'],
            platziCourse: 'Curso de Transformación Digital',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Economía del deporte',
            concept: 'El deporte profesional como mercado laboral real',
            description:
              'Los jugadores de béisbol son, económicamente, trabajadores cuyo valor de mercado se negocia constantemente según su productividad medible. La economía del deporte estudia estos mercados laborales como casos de estudio porque su desempeño es excepcionalmente medible.',
            tags: ['Mercado laboral', 'Economía del deporte', 'Valoración de talento'],
            platziCourse: 'Curso de Economía del Deporte',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Guion',
            concept: 'Adaptar estadística árida en conflicto dramático humano',
            description:
              'El guion de Aaron Sorkin y Steven Zaillian convierte un libro sobre análisis estadístico de béisbol en un drama emocional sobre identidad profesional y obsolescencia, demostrando cómo se humaniza contenido técnico para narrativa cinematográfica.',
            tags: ['Aaron Sorkin', 'Adaptación', 'Guion'],
            platziCourse: 'Curso de Adaptación de Guion',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Dirección de actores',
            concept: 'Brad Pitt y la actuación de presión contenida',
            description:
              'Brad Pitt interpreta a Beane con tensión interna constante —ansiedad bajo apariencia calmada— reflejando la presión real de apostar la carrera profesional completa a un método no probado todavía públicamente.',
            tags: ['Brad Pitt', 'Actuación contenida', 'Dirección de actores'],
            platziCourse: 'Curso de Actuación para Cine',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Estructura narrativa',
            concept: 'El deporte como vehículo para temas no deportivos',
            description:
              'Moneyball no es realmente sobre béisbol — usa el deporte como vehículo para explorar temas de innovación, resistencia al cambio y redefinición del éxito. Esta técnica narrativa permite hacer accesible un tema técnico mediante un género ya familiar para el público.',
            tags: ['Estructura narrativa', 'Géneros cinematográficos', 'Tema vs. vehículo'],
            platziCourse: 'Curso de Estructura Narrativa',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Producción',
            concept: 'Filmación en estadios reales para autenticidad',
            description:
              'La producción filmó en estadios de béisbol reales con extras genuinos de aficionados, en vez de recrear digitalmente el ambiente, priorizando autenticidad atmosférica sobre control total de producción en estudio.',
            tags: ['Locaciones reales', 'Autenticidad de producción', 'Filmación deportiva'],
            platziCourse: 'Curso de Producción Cinematográfica',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'The Wolf of Wall Street',
    category: 'Comedia',
    year: 2013,
    duration: '180min',
    director: 'Martin Scorsese',
    description:
      'La ascensión y caída de un corredor de bolsa que construyó un imperio financiero sobre fraude bursátil y excesos desenfrenados.',
    thumbnail: '/thumbnails/wolf-of-wall-street.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781849402/wolf_of_wallstreet_ybepjv.mp4',
    whatYouLearn:
      'Entenderás qué son las acciones penny stock y por qué son terreno fértil para fraude, cómo operan los esquemas de manipulación de precios, y qué mecanismos legales finalmente detectan y castigan estos delitos financieros.',
    learningTabs: [
      {
        id: 'mercados',
        label: 'Mercados financieros',
        icon: '📈',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Mercados financieros',
            concept: 'Penny stocks y manipulación de precio',
            description:
              'Las penny stocks son acciones de empresas pequeñas que cotizan por debajo de 5 dólares, con baja liquidez y poca regulación informativa — terreno ideal para manipular precios artificialmente. Jordan Belfort construyó su esquema completo sobre este vacío regulatorio.',
            tags: ['Penny stocks', 'Manipulación de mercado', 'Liquidez'],
            platziCourse: 'Curso de Mercados Financieros',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Derecho financiero',
            concept: 'Fraude de valores y persecución de la SEC',
            description:
              'El fraude de valores —vender acciones basándose en información falsa— es perseguido activamente por la SEC mediante investigación de patrones de trading sospechosos. El caso real de Belfort resultó en 22 meses de prisión y restitución de millones de dólares a víctimas.',
            tags: ['Fraude de valores', 'SEC', 'Derecho financiero'],
            platziCourse: 'Curso de Derecho Financiero',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Mercados financieros',
            concept: 'IPOs manipuladas y captación fraudulenta de capital',
            description:
              'Stratton Oakmont manipulaba ofertas públicas iniciales (IPOs) reteniendo control de las acciones para inflar artificialmente el precio antes de vender a inversionistas desinformados. Este esquema específico llevó a algunas de las condenas más severas del caso real.',
            tags: ['IPO', 'Manipulación de capital', 'Fraude bursátil'],
            platziCourse: 'Curso de Mercado de Capitales',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Finanzas internacionales',
            concept: 'Lavado de dinero a través de cuentas offshore',
            description:
              'Belfort lavó dinero a través de bancos suizos usando estructuras corporativas complejas diseñadas específicamente para ocultar el origen ilícito de fondos. Las regulaciones internacionales contra lavado de dinero se han fortalecido significativamente desde este tipo de casos.',
            tags: ['Lavado de dinero', 'Cuentas offshore', 'Finanzas internacionales'],
            platziCourse: 'Curso de Finanzas Internacionales',
          },
        ],
      },
      {
        id: 'psicologia',
        label: 'Psicología',
        icon: '🧠',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Psicología de masas',
            concept: 'Carisma como herramienta de manipulación masiva',
            description:
              'Belfort entrena a su equipo en técnicas de oratoria persuasiva que generan euforia colectiva — un fenómeno estudiado en psicología de masas desde Gustave Le Bon. El carisma sin ética se convierte en un multiplicador de daño, no solo de ventas.',
            tags: ['Psicología de masas', 'Carisma', 'Persuasión'],
            platziCourse: 'Curso de Psicología de la Persuasión',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Economía conductual',
            concept: 'Exceso de confianza y comportamiento de riesgo extremo',
            description:
              'El consumo desenfrenado de drogas y dinero refleja un patrón documentado en economía conductual: el éxito temprano genera exceso de confianza que lleva a asumir riesgos cada vez mayores, hasta el colapso. Es el mismo patrón visible en muchas burbujas financieras históricas.',
            tags: ['Exceso de confianza', 'Riesgo', 'Economía conductual'],
            platziCourse: 'Curso de Economía Conductual',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Psicología de las adicciones',
            concept: 'Dinero y drogas como refuerzo del mismo circuito de recompensa',
            description:
              'La película muestra cómo el consumo excesivo de sustancias y la búsqueda de dinero activan circuitos neuronales de recompensa similares. La psicología de las adicciones estudia cómo distintos estímulos pueden generar patrones de compulsión equivalentes en el cerebro.',
            tags: ['Neurociencia de la recompensa', 'Adicción', 'Psicología clínica'],
            platziCourse: 'Curso de Psicología de las Adicciones',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Psicología organizacional',
            concept: 'Lealtad grupal por encima de la ética individual',
            description:
              'El equipo de Belfort protege sus prácticas fraudulentas mutuamente incluso cuando saben que está mal, priorizando la lealtad al grupo sobre el juicio ético individual. Esto refleja dinámicas de psicología organizacional sobre cómo los grupos cerrados normalizan comportamiento de riesgo colectivo.',
            tags: ['Lealtad grupal', 'Psicología organizacional', 'Comportamiento colectivo'],
            platziCourse: 'Curso de Psicología Organizacional',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Dirección',
            concept: 'Martin Scorsese y el exceso visual como crítica, no celebración',
            description:
              'Scorsese usa exceso visual deliberado —fiestas, drogas, dinero— para hacer que el espectador sienta la seducción del estilo de vida antes de mostrar sus consecuencias, una técnica narrativa de riesgo que generó debate sobre si la película celebra o critica lo que muestra.',
            tags: ['Martin Scorsese', 'Crítica narrativa', 'Exceso visual'],
            platziCourse: 'Curso de Análisis Cinematográfico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Actuación',
            concept: 'Leonardo DiCaprio y la narración no confiable',
            description:
              'DiCaprio rompe la cuarta pared como narrador, pero el personaje frecuentemente miente o se contradice a sí mismo dentro de su propia narración — una técnica de \'narrador no confiable\' que obliga al espectador a cuestionar activamente lo que ve.',
            tags: ['Narrador no confiable', 'Leonardo DiCaprio', 'Técnica narrativa'],
            platziCourse: 'Curso de Narrativa Cinematográfica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Edición',
            concept: 'Duración extendida (180 min) como inmersión deliberada',
            description:
              'La duración inusualmente larga de la película sumerge al espectador en el exceso hasta el agotamiento, replicando narrativamente la misma fatiga moral que eventualmente experimentan los personajes después de tanto exceso sostenido.',
            tags: ['Duración cinematográfica', 'Ritmo narrativo', 'Edición'],
            platziCourse: 'Curso de Edición Audiovisual',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Basado en hechos reales',
            concept: 'Adaptación de memorias y verificación de hechos en cine biográfico',
            description:
              'La película está basada en las memorias del propio Jordan Belfort, planteando preguntas sobre cine biográfico: ¿cuánto se puede confiar en la versión de los hechos contada por el propio protagonista de un fraude masivo?',
            tags: ['Cine biográfico', 'Adaptación literaria', 'Verificación de hechos'],
            platziCourse: 'Curso de Cine Documental y Biográfico',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Helvetica',
    category: 'Documental',
    year: 2007,
    duration: '80min',
    director: 'Gary Hustwit',
    description:
      'Un recorrido por la historia y omnipresencia de la tipografía Helvetica, y cómo transformó el diseño gráfico mundial.',
    thumbnail: '/thumbnails/helvetica.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781849593/helvetica_i9s6wk.mp4',
    whatYouLearn:
      'Comprenderás los principios de legibilidad tipográfica, por qué el diseño suizo (International Style) dominó el siglo XX, y cómo una sola fuente puede cargar significados culturales completamente distintos según el contexto que la rodea.',
    learningTabs: [
      {
        id: 'tipografia',
        label: 'Tipografía',
        icon: '🔤',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Tipografía',
            concept: 'Legibilidad vs. personalidad en tipografía',
            description:
              'Helvetica fue diseñada en 1957 buscando neutralidad absoluta: sin curvas decorativas, sin personalidad que distraiga del mensaje. Esta tensión entre legibilidad pura y expresividad sigue siendo la decisión central de cualquier elección tipográfica hoy.',
            tags: ['Tipografía', 'Legibilidad', 'Diseño suizo'],
            platziCourse: 'Curso de Tipografía',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Tipografía',
            concept: 'Anatomía de la letra: terminales, contraste y altura-x',
            description:
              'Helvetica tiene terminales rectos, bajo contraste de trazo y altura-x generosa — decisiones técnicas específicas que la hacen legible a distintos tamaños. Entender la anatomía tipográfica permite elegir fuentes con intención, no por gusto superficial.',
            tags: ['Anatomía tipográfica', 'Altura-x', 'Diseño de tipos'],
            platziCourse: 'Curso de Anatomía Tipográfica',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Historia de la tipografía',
            concept: 'De Akzidenz Grotesk a Helvetica: la evolución de las sans serif',
            description:
              'Helvetica no nació de la nada — evolucionó de tipografías sans serif anteriores como Akzidenz Grotesk, refinando proporciones para mayor neutralidad. La historia tipográfica muestra cómo el diseño avanza por iteración, no por invención aislada.',
            tags: ['Akzidenz Grotesk', 'Historia tipográfica', 'Sans serif'],
            platziCourse: 'Curso de Historia de la Tipografía',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Tipografía digital',
            concept: 'Helvetica en la era digital: de Linotype a las pantallas',
            description:
              'La transición de Helvetica del plomo a la fotocomposición y luego a fuentes digitales requirió reingeniería técnica significativa para mantener su forma en distintos medios. Cada salto tecnológico en tipografía exige adaptación, no solo conversión directa.',
            tags: ['Tipografía digital', 'Linotype', 'Adaptación tecnológica'],
            platziCourse: 'Curso de Tipografía Digital',
          },
        ],
      },
      {
        id: 'historia_diseno',
        label: 'Historia del diseño',
        icon: '🏛️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Historia del diseño',
            concept: 'International Typographic Style',
            description:
              'El estilo suizo surgido en los años 50 propone grids matemáticos, jerarquía clara y ausencia de ornamento. Empresas como American Airlines, Lufthansa y el metro de Nueva York adoptaron este lenguaje visual porque comunicaba modernidad y eficiencia sin ambigüedad.',
            tags: ['Diseño suizo', 'Grid system', 'Modernismo'],
            platziCourse: 'Curso de Historia del Diseño Gráfico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Historia del diseño',
            concept: 'Bauhaus y los orígenes del funcionalismo',
            description:
              'El Estilo Internacional Tipográfico hereda principios directos de la Bauhaus: la forma sigue la función, sin ornamento innecesario. Helvetica es, en cierto sentido, la culminación tipográfica de ideas que comenzaron en Alemania en 1919.',
            tags: ['Bauhaus', 'Funcionalismo', 'Modernismo'],
            platziCourse: 'Curso de Historia del Diseño Moderno',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño corporativo',
            concept: 'Identidad corporativa de posguerra y expansión global',
            description:
              'Tras la Segunda Guerra Mundial, las corporaciones multinacionales necesitaban un lenguaje visual que comunicara consistencia across fronteras culturales. Helvetica se convirtió en la solución porque su neutralidad funcionaba igual en Tokio que en Nueva York.',
            tags: ['Identidad corporativa', 'Globalización', 'Diseño de posguerra'],
            platziCourse: 'Curso de Diseño de Identidad Corporativa',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Crítica del diseño',
            concept: 'La política invisible de las decisiones tipográficas',
            description:
              'Elegir una tipografía nunca es neutral: comunica jerarquía social, ideología política y valores culturales aunque el diseñador no lo intente. Diseñadores como Massimo Vignelli defendían Helvetica como solución universal; otros la criticaban como uniformidad corporativa impuesta.',
            tags: ['Crítica del diseño', 'Vignelli', 'Ideología visual'],
            platziCourse: 'Curso de Pensamiento Crítico en Diseño',
          },
        ],
      },
      {
        id: 'semiotica',
        label: 'Semiótica',
        icon: '🔍',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Semiótica',
            concept: 'El mismo signo, significados opuestos según contexto',
            description:
              'Helvetica comunica autoridad corporativa en un logo bancario y rebeldía urbana en un graffiti. La semiótica estudia cómo el significado de un signo visual depende completamente del contexto cultural que lo rodea, no de propiedades inherentes a la forma.',
            tags: ['Semiótica', 'Significado visual', 'Contexto cultural'],
            platziCourse: 'Curso de Semiótica del Diseño',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Semiótica',
            concept: 'Connotación vs. denotación en diseño visual',
            description:
              'Roland Barthes distinguió entre denotación (lo literal) y connotación (significados culturales asociados). Una palabra en Helvetica denota su significado literal, pero connota modernidad, neutralidad o frialdad corporativa según quién la lea.',
            tags: ['Roland Barthes', 'Connotación', 'Denotación'],
            platziCourse: 'Curso de Semiótica Visual',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Comunicación visual',
            concept: 'Tipografía como portadora silenciosa de tono',
            description:
              'El mismo mensaje escrito en Helvetica versus una fuente decorativa comunica tonos completamente distintos sin cambiar una sola palabra. La tipografía funciona como un canal de comunicación paralelo al contenido textual mismo.',
            tags: ['Tono visual', 'Comunicación no verbal', 'Diseño gráfico'],
            platziCourse: 'Curso de Comunicación Visual',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Semiótica',
            concept: 'Saturación visual y pérdida de significado distintivo',
            description:
              'Cuando una tipografía se usa en demasiados contextos distintos —desde el gobierno hasta marcas de moda— corre el riesgo de volverse semióticamente \'vacía\': tan omnipresente que deja de comunicar algo específico. El documental explora si esto le pasó a Helvetica.',
            tags: ['Saturación de marca', 'Significado visual', 'Sobreuso tipográfico'],
            platziCourse: 'Curso de Semiótica de Marca',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: 'Objectified',
    category: 'Documental',
    year: 2009,
    duration: '75min',
    director: 'Gary Hustwit',
    description:
      'Una exploración de la relación entre humanos y objetos diseñados, a través de entrevistas con los diseñadores industriales más influyentes del mundo.',
    thumbnail: '/thumbnails/objectified.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781849797/objectified_artrgy.mp4',
    whatYouLearn:
      'Aprenderás los principios del diseño centrado en el usuario, qué hace que un objeto cotidiano sea \'bueno diseño\' según estándares de la industria, y cómo decisiones invisibles de ergonomía afectan tu vida diaria sin que lo notes.',
    learningTabs: [
      {
        id: 'diseno_industrial',
        label: 'Diseño industrial',
        icon: '⚙️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Diseño industrial',
            concept: 'Diseño centrado en el usuario',
            description:
              'El diseño centrado en el usuario prioriza necesidades reales observadas sobre suposiciones del diseñador. IDEO y Dieter Rams popularizaron metodologías donde cada decisión de forma responde a un comportamiento humano verificado, no a estética arbitraria.',
            tags: ['UX Design', 'Dieter Rams', 'IDEO'],
            platziCourse: 'Curso de Diseño Centrado en el Usuario',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Diseño industrial',
            concept: 'Materiales y procesos de manufactura como restricción creativa',
            description:
              'Cada objeto entrevistado en el documental está limitado por las propiedades físicas de su material y el proceso de manufactura disponible. El buen diseño industrial trabaja con estas restricciones, no contra ellas, para producir formas viables a escala.',
            tags: ['Materiales', 'Manufactura', 'Procesos de producción'],
            platziCourse: 'Curso de Materiales para Diseño',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Ergonomía',
            concept: 'Antropometría: diseñar para el cuerpo humano real',
            description:
              'Los diseñadores industriales usan datos antropométricos —medidas estandarizadas del cuerpo humano— para que objetos como sillas, herramientas o dispositivos se ajusten ergonómicamente a la mayoría de usuarios reales, no a un usuario promedio imaginario.',
            tags: ['Antropometría', 'Ergonomía', 'Diseño centrado en el cuerpo'],
            platziCourse: 'Curso de Ergonomía y Diseño',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Proceso de diseño',
            concept: 'Iteración y prototipado rápido',
            description:
              'Los diseñadores industriales muestran decenas de prototipos fallidos antes del objeto final. El prototipado rápido —hoy acelerado con impresión 3D— permite testear ergonomía física real antes de comprometerse con producción masiva costosa.',
            tags: ['Prototipado', 'Iteración', 'Proceso de diseño'],
            platziCourse: 'Curso de Prototipado y Producto',
          },
        ],
      },
      {
        id: 'psicologia_diseno',
        label: 'Psicología del diseño',
        icon: '🧩',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Psicología del diseño',
            concept: 'Affordances: el objeto que explica su propio uso',
            description:
              'Donald Norman popularizó el concepto de affordance: las propiedades físicas de un objeto deben sugerir cómo se usa sin instrucciones. Una manija que se ve para empujar pero requiere jalarse es una falla de affordance — y genera frustración medible en usuarios reales.',
            tags: ['Donald Norman', 'Affordances', 'Usabilidad'],
            platziCourse: 'Curso de Psicología del Diseño Cotidiano',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Psicología del consumo',
            concept: 'Apego emocional a objetos cotidianos',
            description:
              'Los entrevistados describen relaciones emocionales con objetos bien diseñados —un cepillo de dientes, una silla— más allá de su función práctica. La psicología del consumo estudia cómo ciertos objetos generan apego emocional desproporcionado a su utilidad funcional.',
            tags: ['Apego emocional', 'Psicología del consumo', 'Diseño emocional'],
            platziCourse: 'Curso de Psicología del Consumo',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Percepción',
            concept: 'Señales visuales de calidad percibida',
            description:
              'Detalles como el peso de un objeto, el sonido al cerrarse o la textura del material comunican calidad antes de que el usuario piense conscientemente en ello. El diseño industrial manipula deliberadamente estas señales sensoriales de percepción de calidad.',
            tags: ['Percepción sensorial', 'Calidad percibida', 'Diseño multisensorial'],
            platziCourse: 'Curso de Diseño Sensorial',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Psicología cognitiva',
            concept: 'Carga cognitiva: por qué la simplicidad reduce el esfuerzo mental',
            description:
              'Un objeto con demasiadas opciones o controles aumenta la carga cognitiva necesaria para usarlo correctamente. La psicología cognitiva explica por qué los diseños más simples no son solo estéticamente preferidos — reducen literalmente el esfuerzo mental requerido.',
            tags: ['Carga cognitiva', 'Simplicidad', 'Psicología cognitiva'],
            platziCourse: 'Curso de Psicología Cognitiva Aplicada',
          },
        ],
      },
      {
        id: 'sostenibilidad',
        label: 'Sostenibilidad',
        icon: '🌱',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Sostenibilidad',
            concept: 'Obsolescencia programada vs. diseño duradero',
            description:
              'Algunos diseñadores entrevistados critican objetos diseñados para fallar después de su garantía, forzando recompra. El diseño sostenible —como el de Braun bajo Rams— prioriza durabilidad y reparabilidad sobre ciclos de consumo acelerado.',
            tags: ['Obsolescencia programada', 'Sostenibilidad', 'Braun'],
            platziCourse: 'Curso de Diseño Sostenible',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Economía circular',
            concept: 'Diseño para desensamblaje y reciclaje',
            description:
              'Algunos diseñadores industriales ahora diseñan productos pensando explícitamente en cómo se desarmarán al final de su vida útil, facilitando reciclaje de materiales individuales en vez de crear objetos imposibles de separar.',
            tags: ['Economía circular', 'Diseño para desensamblaje', 'Reciclaje'],
            platziCourse: 'Curso de Economía Circular',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Impacto ambiental',
            concept: 'Huella de carbono de la producción masiva de objetos',
            description:
              'Cada objeto cotidiano implica extracción de materia prima, manufactura y transporte global con un costo ambiental medible. El documental plantea si el diseño industrial tiene responsabilidad ética sobre el ciclo de vida ambiental completo de lo que crea.',
            tags: ['Huella de carbono', 'Impacto ambiental', 'Ética del diseño'],
            platziCourse: 'Curso de Diseño y Medio Ambiente',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Consumo responsable',
            concept: 'Calidad sobre cantidad como filosofía de diseño sostenible',
            description:
              'Varios diseñadores defienden crear menos objetos pero de mayor calidad y durabilidad, en vez de maximizar volumen de producción. Esta filosofía conecta diseño industrial con economía del consumo responsable a largo plazo.',
            tags: ['Consumo responsable', 'Calidad vs. cantidad', 'Filosofía del diseño'],
            platziCourse: 'Curso de Consumo Responsable',
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Abstract: The Art of Design',
    category: 'Documental',
    year: 2017,
    duration: '320min',
    director: 'Morgan Neville (showrunner)',
    description:
      'Una serie documental que explora las mentes de diseñadores excepcionales en disciplinas que van desde arquitectura hasta ilustración y diseño de zapatillas.',
    thumbnail: '/thumbnails/abstract.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781850099/abstract_aevoha.mp4',
    whatYouLearn:
      'Verás cómo distintas disciplinas de diseño —arquitectura, gráfico, automotriz, ilustración— comparten un proceso creativo subyacente, y entenderás cómo las restricciones técnicas y comerciales moldean (y a veces mejoran) el resultado creativo final.',
    learningTabs: [
      {
        id: 'proceso_creativo',
        label: 'Proceso creativo',
        icon: '💡',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Proceso creativo',
            concept: 'La restricción como motor de creatividad',
            description:
              'Cada diseñador entrevistado enfrenta restricciones —presupuesto, materiales, plazos— que paradójicamente generan sus soluciones más innovadoras. La investigación en creatividad de Teresa Amabile confirma: restricciones moderadas aumentan creatividad más que libertad absoluta.',
            tags: ['Amabile', 'Restricción creativa', 'Innovación'],
            platziCourse: 'Curso de Pensamiento Creativo',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Proceso creativo',
            concept: 'Fracaso iterativo como parte necesaria del proceso',
            description:
              'Cada diseñador entrevistado muestra docenas de versiones descartadas antes de la solución final. El fracaso iterativo no es un error en el proceso creativo —es estructuralmente parte de cómo emergen las mejores ideas en cualquier disciplina de diseño.',
            tags: ['Iteración', 'Fracaso productivo', 'Metodología creativa'],
            platziCourse: 'Curso de Metodología de Diseño',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Pensamiento divergente',
            concept: 'Generar muchas ideas antes de converger en una',
            description:
              'Los procesos mostrados en la serie siguen un patrón de divergencia (generar muchas opciones) seguido de convergencia (seleccionar y refinar). Este patrón, documentado en teoría de diseño, es más efectivo que intentar encontrar la solución correcta directamente.',
            tags: ['Pensamiento divergente', 'Design thinking', 'Generación de ideas'],
            platziCourse: 'Curso de Design Thinking',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Creatividad',
            concept: 'Inspiración cruzada entre disciplinas distintas',
            description:
              'Los diseñadores entrevistados citan constantemente inspiración de campos ajenos al suyo —arquitectura inspirada en biología, moda inspirada en ingeniería. La innovación cruzada entre disciplinas es una fuente documentada de avances creativos significativos.',
            tags: ['Inspiración interdisciplinaria', 'Innovación cruzada', 'Creatividad'],
            platziCourse: 'Curso de Innovación Interdisciplinaria',
          },
        ],
      },
      {
        id: 'diseno_grafico',
        label: 'Diseño gráfico y branding',
        icon: '🎨',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Diseño gráfico',
            concept: 'Diseño editorial como construcción de identidad de marca',
            description:
              'El episodio sobre Paula Scher muestra cómo el diseño tipográfico y de identidad visual no decora una marca — la construye. Scher rediseñó la identidad del Public Theater de Nueva York usando solo tipografía expresiva, sin ningún ícono o símbolo adicional.',
            tags: ['Paula Scher', 'Identidad de marca', 'Diseño editorial'],
            platziCourse: 'Curso de Branding y Diseño de Identidad',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Diseño gráfico',
            concept: 'Tipografía como sistema, no como decoración',
            description:
              'Scher trata la tipografía como un sistema arquitectónico completo —escala, jerarquía, ritmo visual— en lugar de simplemente elegir una fuente bonita. Este enfoque sistémico es lo que distingue diseño gráfico profesional de decoración tipográfica superficial.',
            tags: ['Sistemas tipográficos', 'Jerarquía visual', 'Diseño sistémico'],
            platziCourse: 'Curso de Sistemas de Diseño Gráfico',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Branding',
            concept: 'Identidad visual coherente across múltiples aplicaciones',
            description:
              'Una identidad de marca exitosa debe funcionar igual en un cartel callejero, una tarjeta de presentación y una aplicación digital. La consistencia across formatos es uno de los criterios técnicos más exigentes en diseño de identidad corporativa.',
            tags: ['Identidad visual', 'Consistencia de marca', 'Sistemas de marca'],
            platziCourse: 'Curso de Identidad Corporativa',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Diseño gráfico',
            concept: 'El diseño gráfico como narrativa cultural pública',
            description:
              'Las identidades visuales de instituciones culturales —como el Public Theater— no solo comunican información, participan en la construcción de la identidad cultural pública de una ciudad. El diseño gráfico tiene un rol cívico además de comercial.',
            tags: ['Diseño cívico', 'Cultura pública', 'Identidad institucional'],
            platziCourse: 'Curso de Diseño para Instituciones Culturales',
          },
        ],
      },
      {
        id: 'arquitectura',
        label: 'Arquitectura y producto',
        icon: '🏗️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Arquitectura',
            concept: 'Diseño biofílico: integrar naturaleza en espacios construidos',
            description:
              'Bjarke Ingels explica cómo integra elementos naturales —luz, vegetación, formas orgánicas— en arquitectura urbana. El diseño biofílico está respaldado por evidencia: reduce estrés medible y mejora productividad en espacios de trabajo según estudios ambientales.',
            tags: ['Bjarke Ingels', 'Diseño biofílico', 'Arquitectura'],
            platziCourse: 'Curso de Arquitectura y Espacios',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Arquitectura',
            concept: 'Arquitectura social: diseñar para la comunidad, no solo el edificio',
            description:
              'Ingels argumenta que la arquitectura exitosa considera el impacto social en la comunidad circundante, no solo la funcionalidad del edificio aislado. Esto refleja un giro en arquitectura contemporánea hacia diseño centrado en impacto social medible.',
            tags: ['Arquitectura social', 'Urbanismo', 'Diseño comunitario'],
            platziCourse: 'Curso de Arquitectura y Urbanismo',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño de producto',
            concept: 'Diseño de producto bajo presión comercial',
            description:
              'El episodio sobre diseño de zapatillas (Tinker Hatfield, Nike) muestra cómo el diseño de producto exitoso equilibra innovación técnica, narrativa de marca y viabilidad de manufactura masiva simultáneamente — no son fases secuenciales sino restricciones que se resuelven juntas.',
            tags: ['Tinker Hatfield', 'Diseño de producto', 'Nike'],
            platziCourse: 'Curso de Diseño de Producto',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Diseño de producto',
            concept: 'Narrativa de marca incorporada en la forma física del producto',
            description:
              'Hatfield diseña zapatillas que cuentan una historia de marca a través de su forma —no solo su función— conectando con la identidad aspiracional del usuario. El diseño de producto exitoso comunica narrativa antes de que el usuario lea cualquier texto de marketing.',
            tags: ['Narrativa de marca', 'Diseño de calzado', 'Storytelling de producto'],
            platziCourse: 'Curso de Diseño y Narrativa de Marca',
          },
        ],
      },
    ],
  },
  {
    id: 16,
    title: 'Rams',
    category: 'Documental',
    year: 2018,
    duration: '94min',
    director: 'Gary Hustwit',
    description:
      'Un retrato íntimo de Dieter Rams, el diseñador industrial cuyos diez principios de buen diseño influenciaron generaciones de productos, incluyendo a Apple.',
    thumbnail: '/thumbnails/rams.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781850266/Rams_-_Official_Trailer_-_Film_First_720p_h264_rusubb.mp4',
    whatYouLearn:
      'Conocerás los diez principios de buen diseño de Dieter Rams, entenderás por qué \'menos pero mejor\' se convirtió en filosofía central del diseño minimalista moderno, y verás la línea directa entre su trabajo en Braun y el diseño de productos Apple actuales.',
    learningTabs: [
      {
        id: 'filosofia_diseno',
        label: 'Filosofía del diseño',
        icon: '📐',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Filosofía del diseño',
            concept: 'Los diez principios de buen diseño de Rams',
            description:
              'Rams formuló diez principios incluyendo: el buen diseño es innovador, útil, estético, comprensible y honesto. Jonathan Ive, diseñador jefe de Apple por años, citó estos principios directamente como influencia central en el diseño del iPhone y iPod.',
            tags: ['Dieter Rams', 'Diseño minimalista', 'Apple'],
            platziCourse: 'Curso de Filosofía del Diseño',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Minimalismo',
            concept: '"Menos, pero mejor" (Weniger, aber besser)',
            description:
              'Esta frase resume la filosofía de Rams: eliminar todo elemento que no sirva a la función esencial del objeto. No es estética minimalista por moda —es una ética de diseño que considera cada elemento decorativo como una distracción que el usuario paga, literal y cognitivamente.',
            tags: ['Minimalismo', 'Funcionalismo', 'Ética del diseño'],
            platziCourse: 'Curso de Diseño Minimalista',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Filosofía del diseño',
            concept: 'Honestidad en el diseño: no fingir ser lo que no es',
            description:
              'Uno de los principios de Rams establece que el buen diseño no debe hacer que un producto parezca más innovador, poderoso o valioso de lo que realmente es. Esta honestidad material contrasta con tendencias de diseño que priorizan apariencia sobre sustancia real.',
            tags: ['Honestidad en diseño', 'Ética material', 'Autenticidad'],
            platziCourse: 'Curso de Ética del Diseño',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Filosofía del diseño',
            concept: 'El buen diseño es tan poco diseño como sea posible',
            description:
              'Este principio aparentemente paradójico de Rams sugiere que la intervención del diseñador debería ser mínima e invisible, dejando que la función del objeto hable por sí misma sin estilismo innecesario superpuesto sobre la utilidad real.',
            tags: ['Diseño invisible', 'Funcionalismo radical', 'Minimalismo'],
            platziCourse: 'Curso de Diseño Funcional',
          },
        ],
      },
      {
        id: 'diseno_industrial',
        label: 'Diseño industrial',
        icon: '⚙️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Diseño industrial',
            concept: 'Diseño atemporal vs. diseño de moda',
            description:
              'Los productos Braun diseñados por Rams en los 60s siguen viéndose contemporáneos seis décadas después. Esto contradice la lógica de obsolescencia de moda: el buen diseño funcional no envejece porque resuelve un problema real, no una tendencia estética temporal.',
            tags: ['Diseño atemporal', 'Braun', 'Funcionalismo'],
            platziCourse: 'Curso de Diseño Industrial',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Diseño industrial',
            concept: 'Sistemas modulares: diseñar familias de productos coherentes',
            description:
              'Rams diseñó productos Braun como sistemas modulares donde diferentes dispositivos comparten lenguaje visual y proporciones, permitiendo que coexistan armónicamente. El diseño de sistemas, no de objetos aislados, fue central en su metodología.',
            tags: ['Diseño de sistemas', 'Modularidad', 'Coherencia de producto'],
            platziCourse: 'Curso de Diseño de Sistemas de Producto',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño industrial',
            concept: 'Influencia directa de Rams en el diseño de Apple',
            description:
              'Comparaciones directas entre productos Braun de los 60s y dispositivos Apple muestran similitudes evidentes en proporción, simplicidad de forma y jerarquía de controles. Jonathan Ive reconoció abiertamente la influencia de Rams en el lenguaje visual de Apple.',
            tags: ['Influencia de diseño', 'Apple', 'Jonathan Ive'],
            platziCourse: 'Curso de Historia del Diseño Industrial',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Diseño industrial',
            concept: 'Interfaces físicas claras: botones, diales y retroalimentación táctil',
            description:
              'Los productos de Rams usan controles físicos con retroalimentación táctil clara —un dial que gira con resistencia precisa, un botón que confirma su acción con sonido o movimiento. Esta atención al detalle de interacción física antecede por décadas a la disciplina moderna de UX.',
            tags: ['Interacción física', 'Retroalimentación táctil', 'Diseño de interfaces'],
            platziCourse: 'Curso de Diseño de Interacción',
          },
        ],
      },
      {
        id: 'sostenibilidad',
        label: 'Sostenibilidad',
        icon: '🌱',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Sostenibilidad',
            concept: 'Rams como crítico temprano del consumismo de diseño',
            description:
              'En sus últimos años, Rams expresó arrepentimiento por contribuir a una cultura de consumo de objetos. Su crítica anticipa debates actuales sobre diseño sostenible: ¿puede el buen diseño, si genera deseo de compra constante, ser verdaderamente ético?',
            tags: ['Crítica del consumismo', 'Sostenibilidad', 'Ética del diseño'],
            platziCourse: 'Curso de Diseño Sostenible',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Sostenibilidad',
            concept: 'Reparabilidad como criterio de diseño sostenible',
            description:
              'Los productos Braun de Rams estaban diseñados para ser reparados, con componentes accesibles y reemplazables, en contraste con productos modernos sellados que se desechan completos ante cualquier falla menor. La reparabilidad es hoy un criterio central de diseño sostenible.',
            tags: ['Reparabilidad', 'Diseño sostenible', 'Durabilidad de producto'],
            platziCourse: 'Curso de Diseño para la Reparación',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Sostenibilidad',
            concept: 'Diseño duradero como forma de consumo responsable',
            description:
              'Comprar menos objetos pero de mayor calidad y vida útil más larga reduce el impacto ambiental acumulado de consumo a largo plazo. La filosofía de Rams de durabilidad sobre obsolescencia es hoy estudiada como modelo de consumo responsable.',
            tags: ['Consumo responsable', 'Durabilidad', 'Diseño ambiental'],
            platziCourse: 'Curso de Consumo Responsable',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Sostenibilidad',
            concept: 'El legado de Rams en el movimiento de diseño sostenible actual',
            description:
              'Diseñadores contemporáneos de productos sostenibles citan explícitamente los principios de Rams como base filosófica de sus propias metodologías de diseño circular y consumo consciente, conectando su trabajo de los 60s con movimientos de diseño actuales.',
            tags: ['Legado de diseño', 'Diseño circular', 'Influencia histórica'],
            platziCourse: 'Curso de Diseño Circular Contemporáneo',
          },
        ],
      },
    ],
  },
  {
    id: 17,
    title: 'PressPausePlay',
    category: 'Documental',
    year: 2011,
    duration: '85min',
    director: 'David Dworsky, Victor Köhler',
    description:
      'Una exploración de cómo la tecnología digital democratizó la creación artística, y las nuevas preguntas que esa democratización generó sobre calidad y curación.',
    thumbnail: '/thumbnails/presspauseplay.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781850524/PressPausePlay_Official_Trailer_-_PressPausePlay_720p_h264_uzitjw.mp4',
    whatYouLearn:
      'Entenderás el debate central de la era digital creativa: cuando todos pueden crear y publicar, ¿qué reemplaza la curación tradicional? Verás cómo músicos, fotógrafos y cineastas enfrentaron la disrupción digital de sus industrias en tiempo real.',
    learningTabs: [
      {
        id: 'economia_creativa',
        label: 'Economía creativa',
        icon: '💡',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Economía creativa',
            concept: 'Democratización de herramientas de producción',
            description:
              'Software accesible y cámaras digitales eliminaron barreras de entrada que antes requerían estudios profesionales costosos. Esto generó una explosión cuantitativa de contenido creativo —pero también planteó la pregunta de cómo descubrir calidad en medio del volumen.',
            tags: ['Economía creativa', 'Democratización', 'Producción digital'],
            platziCourse: 'Curso de Economía Creativa Digital',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Economía de la atención',
            concept: 'Saturación de contenido y escasez de atención',
            description:
              'Cuando la producción de contenido se vuelve infinita pero la atención humana permanece finita, el recurso escaso deja de ser la creación y se convierte en la atención del público. Esto invierte completamente los modelos de negocio creativos tradicionales.',
            tags: ['Economía de la atención', 'Saturación', 'Modelos de negocio'],
            platziCourse: 'Curso de Economía de la Atención',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Industria musical',
            concept: 'Disrupción digital de modelos de distribución',
            description:
              'La industria musical fue la primera en sufrir disrupción completa: de vender objetos físicos escasos a competir con copias digitales infinitas y gratuitas. Su adaptación forzada —streaming, modelos freemium— se convirtió en plantilla para otras industrias creativas después.',
            tags: ['Industria musical', 'Streaming', 'Disrupción digital'],
            platziCourse: 'Curso de Modelos de Negocio Digital',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Economía creativa',
            concept: 'Monetización directa: el creador sin intermediarios',
            description:
              'Plataformas digitales permitieron a creadores vender directamente a su público sin pasar por discográficas, editoriales o estudios tradicionales. Este modelo de desintermediación cambió fundamentalmente quién captura el valor económico de la creación cultural.',
            tags: ['Desintermediación', 'Monetización directa', 'Creadores independientes'],
            platziCourse: 'Curso de Monetización de Contenido Digital',
          },
        ],
      },
      {
        id: 'teoria_medios',
        label: 'Teoría de medios',
        icon: '📡',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Teoría de medios',
            concept: 'Curación algorítmica vs. curación humana experta',
            description:
              'Antes, editores y productores decidían qué contenido llegaba al público. Hoy algoritmos de recomendación cumplen esa función basados en engagement, no en criterio de calidad experto. Esto cambia fundamentalmente qué tipo de creatividad se hace visible.',
            tags: ['Algoritmos', 'Curación', 'Teoría de medios'],
            platziCourse: 'Curso de Teoría de Medios Digitales',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Teoría de medios',
            concept: 'El medio como mensaje en la era digital',
            description:
              'Marshall McLuhan argumentó que el medio mismo transforma el contenido, no solo lo transporta. Un video corto vertical genera narrativas distintas a un documental largo horizontal — la plataforma digital moldea qué tipo de creatividad es posible.',
            tags: ['McLuhan', 'El medio es el mensaje', 'Teoría de la comunicación'],
            platziCourse: 'Curso de Teoría de la Comunicación',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Cultura digital',
            concept: 'Remix y cultura participativa',
            description:
              'La tecnología digital permitió que el público no solo consuma sino remezcle y reinterprete contenido original, generando una cultura participativa donde la línea entre creador y audiencia se vuelve difusa. Lawrence Lessig estudió extensamente esta dinámica legal y cultural.',
            tags: ['Cultura del remix', 'Lawrence Lessig', 'Cultura participativa'],
            platziCourse: 'Curso de Cultura Digital Participativa',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Teoría de medios',
            concept: 'Viralidad como nuevo criterio de valor cultural',
            description:
              'Lo que se vuelve viral no necesariamente es lo de mayor calidad artística, sino lo que mejor explota mecanismos de compartición de la plataforma. Esto plantea una tensión real entre mérito creativo tradicional y éxito medible en términos de alcance digital.',
            tags: ['Viralidad', 'Valor cultural', 'Métricas de alcance'],
            platziCourse: 'Curso de Cultura Viral y Medios Digitales',
          },
        ],
      },
      {
        id: 'produccion',
        label: 'Producción audiovisual',
        icon: '🎬',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Producción independiente',
            concept: 'De estudio profesional a laptop: democratización de herramientas',
            description:
              'El documental muestra cómo software de edición y producción musical que antes requería estudios profesionales costosos se volvió accesible en una laptop personal, permitiendo producción de calidad profesional desde espacios domésticos.',
            tags: ['Producción independiente', 'Democratización técnica', 'Herramientas digitales'],
            platziCourse: 'Curso de Producción Audiovisual Independiente',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Documental',
            concept: 'Estructura de entrevistas múltiples para construir argumento colectivo',
            description:
              'PressPausePlay entrelaza entrevistas con músicos, fotógrafos y cineastas de distintas disciplinas para construir un argumento sobre disrupción digital que ninguna voz individual podría sostener sola — una técnica documental de construcción coral de tesis.',
            tags: ['Estructura documental', 'Entrevistas', 'Construcción de argumento'],
            platziCourse: 'Curso de Cine Documental',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Diseño de sonido',
            concept: 'Música electrónica como caso de estudio de producción accesible',
            description:
              'La música electrónica fue uno de los primeros géneros completamente producibles en una laptop sin instrumentos físicos ni estudio de grabación, convirtiéndose en caso paradigmático de cómo la tecnología digital redefine qué cuenta como producción \'profesional\'.',
            tags: ['Música electrónica', 'Producción digital', 'Estudio doméstico'],
            platziCourse: 'Curso de Producción Musical Digital',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Cine documental',
            concept: 'Documentar disrupción tecnológica mientras ocurre',
            description:
              'El documental fue filmado y editado usando las mismas herramientas digitales democratizadas que describe, generando una coherencia metodológica entre forma y contenido poco común en documentales sobre tecnología.',
            tags: ['Metodología documental', 'Coherencia forma-contenido', 'Cine sobre tecnología'],
            platziCourse: 'Curso de Documental Tecnológico',
          },
        ],
      },
    ],
  },
  {
    id: 18,
    title: 'Art & Copy',
    category: 'Documental',
    year: 2009,
    duration: '90min',
    director: 'Doug Pray',
    description:
      'Un vistazo a las mentes creativas detrás de las campañas publicitarias más memorables de la historia, y cómo la gran idea sigue importando más que el medio.',
    thumbnail: '/thumbnails/art-and-copy.jpg',
    rotate180: true,
    videoUrl:
      'https://res.cloudinary.com/dydtxbjkd/video/upload/v1781850761/art_adn_copy_q7c0zb.mp4',
    whatYouLearn:
      'Descubrirás cómo se construyen campañas publicitarias icónicas desde el insight humano, no desde la táctica; entenderás la diferencia entre publicidad que vende y publicidad que se vuelve cultura; y verás por qué la simplicidad radical sigue siendo la habilidad creativa más difícil de lograr.',
    learningTabs: [
      {
        id: 'publicidad',
        label: 'Publicidad',
        icon: '📣',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Publicidad',
            concept: 'Insight humano como base de toda campaña memorable',
            description:
              'Las campañas más recordadas de la historia —\'Just Do It\', \'1984\' de Apple— no parten de características de producto sino de una verdad humana profunda que el público reconoce instantáneamente. La técnica publicitaria sin insight genuino produce anuncios olvidables, sin importar el presupuesto.',
            tags: ['Insight humano', 'Publicidad', 'Estrategia creativa'],
            platziCourse: 'Curso de Estrategia Publicitaria',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Creatividad publicitaria',
            concept: 'Simplicidad radical como la habilidad más difícil',
            description:
              'El comercial \'1984\' de Apple dura 60 segundos sin mostrar el producto. Reducir una idea compleja a su forma más simple y poderosa requiere más disciplina creativa que añadir elementos —es la habilidad que distingue a los creativos legendarios entrevistados en el documental.',
            tags: ['Simplicidad', 'Creatividad', 'Apple 1984'],
            platziCourse: 'Curso de Comunicación Creativa',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Publicidad',
            concept: 'El proceso creativo detrás del eslogan perfecto',
            description:
              'Los creativos entrevistados describen cientos de versiones descartadas antes de llegar a frases icónicas de tres palabras. La aparente simplicidad de un gran eslogan oculta un proceso de refinamiento extremadamente riguroso y disciplinado.',
            tags: ['Proceso creativo', 'Copywriting', 'Refinamiento creativo'],
            platziCourse: 'Curso de Copywriting Publicitario',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Publicidad',
            concept: 'Riesgo creativo: defender ideas no convencionales ante el cliente',
            description:
              'Varias campañas icónicas casi no se aprobaron porque los clientes las consideraban demasiado arriesgadas inicialmente. Los creativos entrevistados narran cómo defendieron ideas no convencionales con argumentos estratégicos sólidos, no solo con confianza artística.',
            tags: ['Riesgo creativo', 'Relación con el cliente', 'Defensa de ideas'],
            platziCourse: 'Curso de Gestión de Cuentas Publicitarias',
          },
        ],
      },
      {
        id: 'branding',
        label: 'Branding',
        icon: '🏷️',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Branding',
            concept: 'Construcción de marca a través de valores, no de producto',
            description:
              'Nike vende identidad atlética y determinación, no zapatos técnicamente superiores a sus competidores. Dan Wieden, quien acuñó \'Just Do It\', explica cómo las marcas más fuertes se construyen vendiendo un sistema de valores que el consumidor quiere para sí mismo.',
            tags: ['Branding', 'Identidad de marca', 'Dan Wieden'],
            platziCourse: 'Curso de Branding Estratégico',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Cultura digital',
            concept: 'Cuando un anuncio se convierte en artefacto cultural',
            description:
              'Algunas campañas trascienden la venta y se convierten en parte del lenguaje cultural compartido —frases que la gente cita sin saber que vienen de publicidad. Esto ocurre cuando la idea creativa captura algo verdadero sobre la época, no solo sobre el producto.',
            tags: ['Cultura popular', 'Publicidad icónica', 'Lenguaje compartido'],
            platziCourse: 'Curso de Cultura Digital y Medios',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Branding',
            concept: 'Consistencia de marca a través de décadas de campañas',
            description:
              'Marcas como Nike mantuvieron coherencia de valores centrales durante décadas de campañas distintas, adaptando la ejecución creativa a cada época sin perder la identidad de fondo. Esta consistencia de largo plazo es lo que distingue branding estratégico de publicidad táctica aislada.',
            tags: ['Consistencia de marca', 'Estrategia de largo plazo', 'Identidad corporativa'],
            platziCourse: 'Curso de Gestión de Marca a Largo Plazo',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Branding',
            concept: 'El cliente como coautor de la narrativa de marca',
            description:
              'Las campañas más exitosas descritas en el documental no le dicen al consumidor qué pensar, sino que le dan un marco narrativo que el consumidor completa con su propia identidad personal. La marca se convierte en colaboración entre creador y público, no en mensaje unidireccional.',
            tags: ['Narrativa de marca', 'Co-creación', 'Identidad del consumidor'],
            platziCourse: 'Curso de Narrativa de Marca',
          },
        ],
      },
      {
        id: 'negocio_creativo',
        label: 'Negocio de la creatividad',
        icon: '💼',
        notes: [
          {
            id: 1,
            triggerTime: { from: 0, to: 11 },
            eyebrow: 'Negocio creativo',
            concept: 'Agencias creativas independientes vs. holdings publicitarios',
            description:
              'Varias de las campañas más memorables nacieron de agencias creativas independientes pequeñas, no de los grandes holdings publicitarios corporativos. El documental explora cómo la estructura organizacional de una agencia afecta directamente su capacidad de tomar riesgos creativos.',
            tags: ['Agencias independientes', 'Estructura organizacional', 'Industria publicitaria'],
            platziCourse: 'Curso de Gestión de Agencias Creativas',
          },
          {
            id: 2,
            triggerTime: { from: 12, to: 23 },
            eyebrow: 'Modelos de negocio',
            concept: 'El modelo de compensación por comisión vs. por proyecto',
            description:
              'La industria publicitaria históricamente se pagaba por comisión sobre medios comprados, incentivando ciertos comportamientos creativos. El cambio hacia modelos de pago por proyecto o resultado ha transformado qué tipo de ideas las agencias están dispuestas a proponer.',
            tags: ['Modelos de compensación', 'Economía de agencias', 'Industria publicitaria'],
            platziCourse: 'Curso de Modelos de Negocio en Publicidad',
          },
          {
            id: 3,
            triggerTime: { from: 24, to: 35 },
            eyebrow: 'Negocio creativo',
            concept: 'Reputación creativa como activo de negocio a largo plazo',
            description:
              'Los creativos entrevistados construyeron carreras de décadas basadas en reputación por trabajo excepcional, no en volumen de proyectos. En industrias creativas, la reputación funciona como un activo de negocio tangible que determina qué clientes y presupuestos se pueden atraer.',
            tags: ['Reputación profesional', 'Carrera creativa', 'Activos intangibles'],
            platziCourse: 'Curso de Desarrollo de Carrera Creativa',
          },
          {
            id: 4,
            triggerTime: { from: 36, to: 9999 },
            eyebrow: 'Negocio creativo',
            concept: 'Medir el retorno de inversión de una idea creativa',
            description:
              'A diferencia de publicidad puramente transaccional, campañas como \'Just Do It\' generaron valor de marca medible durante décadas. El documental plantea cómo la industria ha luchado históricamente por cuantificar el retorno de inversión real de la creatividad publicitaria.',
            tags: ['ROI publicitario', 'Medición de valor', 'Métricas de marca'],
            platziCourse: 'Curso de Medición de Efectividad Publicitaria',
          },
        ],
      },
    ],
  },
]

export const getItemById = (id) => items.find((item) => item.id === Number(id))

export const rows = [
  { title: 'Ciencia ficción', items: items.slice(0, 6) },
  { title: 'Economía y finanzas', items: items.slice(6, 12) },
  { title: 'Diseño y creatividad', items: items.slice(12, 18) },
]
