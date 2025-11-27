# 📧 Configuración de EmailJS

Este documento explica cómo configurar EmailJS para recibir emails del formulario de contacto en **estudionomade2025@gmail.com**.

## 🚀 Pasos de Configuración

### 1. Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz click en **Sign Up** (Registrarse)
3. Regístrate con tu email (puedes usar estudionomade2025@gmail.com)
4. Verifica tu email

### 2. Configurar Servicio de Email

1. En el dashboard, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona **Gmail**
4. Click en **Connect Account** y autoriza con estudionomade2025@gmail.com
5. Asigna un nombre al servicio (ej: "Gmail Estudio Nomade")
6. **Copia el Service ID** (se ve algo como `service_abc123`)

### 3. Crear Template de Email

1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Configura el template así:

**Subject (Asunto):**
```
Nueva consulta de {{from_name}} - Estudio Nómade
```

**Content (Contenido):**
```
Has recibido un nuevo mensaje desde el formulario de contacto de Estudio Nómade.

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde estudionomade.com
```

4. **Copia el Template ID** (se ve algo como `template_xyz789`)
5. Click en **Save**

### 4. Obtener Public Key

1. Ve a **Account** → **General**
2. Busca **Public Key** en la sección de API Keys
3. **Copia el Public Key** (se ve algo como `user_abc123xyz`)

### 5. Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores con tus credenciales:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Configurar en Vercel

Para que funcione en producción:

1. Ve a tu proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Agrega estas 3 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = tu service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = tu template ID  
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = tu public key
4. Click en **Save**
5. Redeploy el proyecto

## ✅ Probar el Formulario

1. Inicia el servidor local: `npm run dev`
2. Ve a http://localhost:3000/contacto
3. Llena el formulario de prueba
4. Verifica que llegue el email a estudionomade2025@gmail.com

## 📊 Plan Gratuito

EmailJS permite **200 emails gratis al mes**, suficiente para empezar. Si necesitas más:
- Plan Personal: 1,000 emails/mes ($15/mes)
- Plan Business: 5,000 emails/mes ($50/mes)

## 🔒 Seguridad

- Las variables `NEXT_PUBLIC_*` son visibles en el cliente
- EmailJS usa tu Public Key para validación
- Los límites de rate-limiting protegen contra spam
- Opcionalmente puedes agregar reCAPTCHA para mayor seguridad

## 🆘 Solución de Problemas

**❌ Error: "Service ID is invalid"**
- Verifica que copiaste correctamente el Service ID
- Asegúrate de que el servicio está activo en EmailJS

**❌ Error: "Template ID is invalid"**
- Verifica que el template está guardado y publicado
- Copia nuevamente el Template ID

**❌ No llegan los emails**
- Revisa la carpeta de spam en Gmail
- Verifica que la cuenta de Gmail está conectada en EmailJS
- Chequea el dashboard de EmailJS para ver logs de envíos

## 📝 Notas

- Los emails pueden tardar 1-2 minutos en llegar
- Revisa siempre la carpeta de spam la primera vez
- Marca los emails de EmailJS como "no spam" para futuros envíos
