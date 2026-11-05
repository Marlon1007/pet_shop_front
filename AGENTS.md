# AGENTS.md - Pet Shop

This document provides instructions, architectural guidelines, and rules for AI agents operating on this repository.

---

## 1. Project Overview

- **Project Name:** Pet Shop
- **Purpose:** Animal adoption administration and management web application.
- **Core Objective:** Provide a comprehensive administration platform to manage animal rescues, adoption listings, adoption applications, applicant reviews, medical/vaccination records, and adoption tracking.
- **Language Policy:** **Always use English.** All code, comments, commit messages, documentation, and user interface (UI) copy must be written in English.

---

## 2. Tech Stack

- **Frontend Framework:** [Angular 17+](https://angular.dev/)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** SCSS
- **State & Reactivity:** RxJS & Angular Signals
- **Backend Architecture:** NestJS REST API
- **Package Manager:** npm

---

## 3. Project Structure

The application source code lives inside `src/app/` with clear modular boundaries:

```text
src/
└── app/
    ├── admin/            # Administrative panel (pet management, adoption requests, adopters)
    ├── auth/             # Authentication, authorization, login, and route guards
    ├── web/              # Public-facing views (pet catalog, public adoption application forms)
    ├── core/             # Singleton services, HTTP interceptors, global guards
    ├── shared/           # Reusable UI components, pipes, directives, and common models
    ├── app.routes.ts     # Main application routing configuration
    └── app.config.ts     # Application-level providers and configuration
```

---

## 4. Domain Entities & Business Logic

Agents must adhere to the following domain models and workflows when building features:

1. **Pet / Animal (`Pet`):**
   - **Attributes:** `id`, `name`, `species` (dog, cat, other), `breed`, `estimatedAge`, `gender`, `size` (small, medium, large), `healthStatus`, `vaccinationStatus`, `adoptionStatus` (`AVAILABLE`, `PENDING_ADOPTION`, `ADOPTED`), `photos`, `description`, `createdAt`.
2. **Adoption Application (`AdoptionRequest`):**
   - **Attributes:** `id`, `petId`, `applicantName`, `applicantEmail`, `applicantPhone`, `status` (`PENDING`, `UNDER_REVIEW`, `APPROVED`, `REJECTED`), `notes`, `submittedAt`, `reviewedAt`.
3. **Adopter / User (`User` / `Adopter`):**
   - **Attributes:** `id`, `firstName`, `lastName`, `email`, `phone`, `role` (`ADMIN`, `STAFF`, `ADOPTER`), `adoptionHistory`.

---

## 5. Development Conventions & Best Practices

All contributions must follow these conventions:

- **Language:**
  - Everything must be written in **English** (identifiers, documentation, logs, tests, and UI labels).
- **Angular Guidelines:**
  - Follow the official Angular style guide.
  - File naming: `kebab-case` with standard suffixes (`.component.ts`, `.service.ts`, `.model.ts`, `.guard.ts`).
  - Prefer standalone components where appropriate, while keeping consistency with existing module architecture (`admin`, `auth`, `web`).
- **TypeScript Strictness:**
  - Avoid `any`. Use strongly typed interfaces and models for all entities and API payloads.
- **Separation of Concerns:**
  - Keep presentation components clean and delegate business logic and HTTP calls to Angular Services (`@Injectable`).
- **Forms:**
  - Use `ReactiveFormsModule` for form handling, validation, and submission (e.g., pet creation/edit forms and adoption application processing).
- **Routing & Performance:**
  - Ensure feature modules and routes are lazy-loaded (`loadChildren` or `loadComponent`).
- **Styles:**
  - Use modular SCSS for component styling. Maintain clean and responsive layouts.

---

## 6. Common Commands

- **Development Server:** `npm start` or `ng serve` (runs on `http://localhost:4200/`)
- **Production Build:** `npm run build`
- **Run Unit Tests:** `npm test`
- **Angular CLI Generation:** `ng generate component|service|module|guard <name>`

---

## 7. Guidelines for AI Agents

1. **Language Enforcement:** Ensure all new code, comments, models, and UI labels are in **English**.
2. **Feature Scoping:** Administrative workflows (dashboard, pet CRUD, request approvals) must belong in the `admin/` module/routes.
3. **Preserve Configuration:** Do not alter build configurations (`angular.json`, `tsconfig.json`) without explicit user instruction.
4. **Verification:** Always verify that code changes compile cleanly with TypeScript and adhere to formatting standards before finalizing work.
