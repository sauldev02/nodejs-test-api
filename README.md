# 📦 Sistema de Gestión de Inventario Compartido

Este es un proyecto de API REST construido con **Node.js**, **Express** y **TypeScript**, utilizando **Prisma ORM** y **PostgreSQL** como base de datos relacional. El sistema simula una aplicación empresarial para gestionar inventario dentro de **almacenes**, donde distintos **usuarios** tienen roles con diferentes **permisos** de acceso a los recursos.

---

## 🧱 Características principales

- 📦 Gestión de productos, compras y pedidos.
- 🏢 Soporte multi-almacén (un usuario pertenece a un solo almacén).
- 👤 Roles con permisos: Administrador, Moderador, Cliente.
- 🔐 Autenticación y autorización basada en roles y permisos.
- 🗃️ Relación clara entre usuarios, productos, compras, pedidos y acciones realizadas (logs).
- 🧼 Arquitectura limpia (Clean Architecture) aplicada.

---

## 🛠️ Tecnologías utilizadas

- **Node.js** + **Express** + **TypeScript**
- **PostgreSQL** como base de datos
- **Prisma ORM** para modelado y consultas
- **Clean Architecture** para separar responsabilidades
- **Git** y **GitHub** para control de versiones
- **Cursor IDE + IA** y **ChatGPT** como apoyo al desarrollo dirigido

---

## 🚧 En desarrollo

Este proyecto está en fase de desarrollo. Es parte de un ejercicio práctico para implementar un sistema realista usando buenas prácticas de arquitectura, organización de código, y uso de herramientas modernas de desarrollo.

---

## 📂 Estructura del proyecto (en progreso)

```bash
nodejs-test-api/
├── .git/
├── .vscode/
├── dist/
├── generated/
├── node_modules/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── application/
│   ├── config/
│   ├── domain/
│   ├── infrastructure/
│   ├── presentation/
│   └── server.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json