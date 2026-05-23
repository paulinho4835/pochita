import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    nombre: z.string(),
    precio: z.number(),
    material: z.enum(['PLA', 'PETG', 'TPU', 'Otro']),
    dimensiones: z.string(),
    tiempoFabricacion: z.string(),
    colores: z.string(),
    disponibilidad: z.enum(['Stock disponible', 'Bajo pedido']),
    categoria: z.enum(['Organización', 'Decoración', 'Gaming', 'Hogar', 'Otro']),
    descripcion: z.string(),
    destacado: z.boolean().default(false),
    badge: z.enum(['Nuevo', 'Popular', 'Últimas unidades']).optional(),
    imagen: z.string(),
    imagenes: z.array(z.string()).optional().default([]),
    mensajeWhatsApp: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.date(),
    imagen: z.string().optional(),
    categoria: z.string().optional().default('General'),
  }),
});

export const collections = { productos, blog };
