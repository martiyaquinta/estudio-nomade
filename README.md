# 💒 Invitaciones Digitales

Plataforma web moderna para crear y gestionar invitaciones digitales personalizadas para todo tipo de eventos: bodas, XV años, cumpleaños, baby showers, bautizos y más.

## ✨ Características

### 🎨 Plantillas Elegantes
- **6 diseños profesionales** adaptados a diferentes tipos de eventos
- **Personalización completa** de colores, textos e imágenes
- **Diseño responsive** que se ve perfecto en todos los dispositivos

### 🛠️ Panel de Administración
- Editor intuitivo para personalizar cada detalle
- Vista previa en tiempo real
- Gestión de múltiples invitaciones

### 📅 Funcionalidades Principales
- ⏱️ **Cuenta regresiva** en tiempo real
- ✅ **Sistema RSVP** para confirmación de asistencia
- 📸 **Galería de fotos** personalizable
- 📍 **Integración con mapas** para ubicación del evento
- 🎁 **Mesa de regalos** con enlaces personalizados
- 📱 **Compartir fácilmente** por WhatsApp, redes sociales o email

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para código más robusto
- **Tailwind CSS** - Estilos modernos y responsive
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos elegantes
- **date-fns** - Manejo de fechas
- **React Hook Form** - Formularios eficientes
- **Zustand** - Gestión de estado

## 📦 Instalación

### Prerrequisitos
- Node.js 18.17 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/martiyaquinta/invitaciones-digitales.git
cd invitaciones-digitales
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
invitaciones-digitales/
├── app/
│   ├── admin/              # Panel de administración
│   │   ├── edit/[id]/      # Editor de invitaciones
│   │   └── page.tsx        # Lista de plantillas
│   ├── invitation/[id]/    # Vista pública de invitación
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/             # Componentes reutilizables (próximamente)
├── lib/                    # Utilidades y funciones (próximamente)
├── public/                 # Archivos estáticos
├── .github/                # Configuración de GitHub
├── package.json            # Dependencias del proyecto
├── tsconfig.json           # Configuración de TypeScript
├── tailwind.config.ts      # Configuración de Tailwind
└── next.config.ts          # Configuración de Next.js
```

## 🌐 Despliegue en Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Push a GitHub**
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Uso

### Crear una Invitación

1. **Navega a `/admin`** en tu navegador
2. **Selecciona una plantilla** del catálogo disponible
3. **Personaliza** todos los campos:
   - Tipo de evento
   - Nombres
   - Fecha y hora
   - Ubicación
   - Mensaje personal
   - Activa/desactiva funciones (RSVP, galería, cuenta regresiva)
4. **Previsualiza** tu invitación en tiempo real
5. **Guarda** y comparte el enlace

### Ver Invitación

Las invitaciones se acceden en: `/invitation/[id]`

Ejemplo: `https://tu-dominio.vercel.app/invitation/1`

## 🎯 Próximas Características

- [ ] Base de datos (Supabase/Firebase)
- [ ] Autenticación de usuarios
- [ ] Dashboard con estadísticas de RSVP
- [ ] Envío automático de invitaciones por email
- [ ] Exportar invitación como PDF
- [ ] Más plantillas y temas
- [ ] Editor de imágenes integrado
- [ ] Reproductor de música
- [ ] Código QR para acceso rápido
- [ ] Múltiples idiomas

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 📧 Contacto

Para consultas o soporte:
- GitHub: [@martiyaquinta](https://github.com/martiyaquinta)
- Repositorio: [invitaciones-digitales](https://github.com/martiyaquinta/invitaciones-digitales)

## 🙏 Agradecimientos

Inspirado en plataformas como [La Tarjeta Digital](https://latarjetadigital.com.ar/)

---

Hecho con ❤️ por Martina Yaquinta
