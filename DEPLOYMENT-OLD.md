# 🚀 Guía de Despliegue en Vercel

## Método 1: Despliegue desde GitHub (Recomendado)

### 1. Preparar el Repositorio

Tu código ya está en GitHub en:
```
https://github.com/martiyaquinta/invitaciones-digitales.git
```

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New Project"**
4. Selecciona **"Import Git Repository"**
5. Busca y selecciona tu repositorio: `martiyaquinta/invitaciones-digitales`

### 3. Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Verifica la configuración:

- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)

### 4. Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:

```env
# No hay variables requeridas por ahora
# Agregar aquí cuando integres base de datos
```

### 5. Deploy

1. Haz clic en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel construye tu proyecto
3. ¡Listo! Tu sitio estará disponible en una URL tipo: `https://invitaciones-digitales.vercel.app`

### 6. Configurar Dominio Personalizado (Opcional)

1. En tu proyecto en Vercel, ve a **Settings** > **Domains**
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar el DNS

---

## Método 2: Despliegue con Vercel CLI

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Login

```bash
vercel login
```

### 3. Deploy

```bash
# Desde la raíz del proyecto
vercel

# Para producción
vercel --prod
```

---

## Actualizaciones Automáticas

Vercel está configurado para desplegar automáticamente:

- **Push a `main`**: Despliega a producción
- **Pull Requests**: Crea previews automáticos
- **Branches**: Cada rama tiene su propio ambiente

---

## Verificar el Despliegue

### Checklist Post-Deploy

- [ ] Página principal carga correctamente
- [ ] Panel admin (`/admin`) funciona
- [ ] Editor de invitaciones (`/admin/edit/1`) funciona
- [ ] Vista pública de invitación (`/invitation/1`) funciona
- [ ] Estilos de Tailwind se aplican correctamente
- [ ] Responsive design funciona en móvil
- [ ] Cuenta regresiva funciona
- [ ] Formularios son interactivos

---

## Comandos Locales Antes de Deploy

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 3. Build de Producción (Opcional)

```bash
# Crear build
npm run build

# Ejecutar build localmente
npm start
```

---

## Solución de Problemas

### Error: Build Failed

**Problema**: Errores de TypeScript o ESLint

**Solución**:
```bash
npm run lint
npm run build
```

Corrige los errores antes de hacer push.

### Error: Dependencies

**Problema**: Paquetes faltantes

**Solución**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Environment Variables

**Problema**: Variables de entorno no definidas

**Solución**: Agrégalas en Vercel Dashboard > Settings > Environment Variables

---

## Próximos Pasos Post-Deploy

1. **Integrar Base de Datos**
   - Supabase o Firebase
   - Guardar invitaciones reales

2. **Agregar Autenticación**
   - NextAuth.js
   - Login con Google/GitHub

3. **Analytics**
   - Vercel Analytics
   - Google Analytics

4. **SEO**
   - Metadatos dinámicos
   - Open Graph images

5. **Performance**
   - Optimizar imágenes
   - Lazy loading

---

## Links Útiles

- **Repositorio**: https://github.com/martiyaquinta/invitaciones-digitales
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Soporte**: https://vercel.com/support

---

## Contacto

Si necesitas ayuda con el despliegue:
- GitHub: [@martiyaquinta](https://github.com/martiyaquinta)
- Email: (tu email aquí)

¡Buena suerte con tu proyecto! 🎉
