# 🔐 Secure Offline Event Ticketing Platform

A security-first event ticketing system designed for environments with limited or no internet connectivity.  
Tickets are generated **only after confirmed Stripe payments** and verified offline using **Ed25519 public-key cryptography**.

Built with a production-grade layered architecture, this platform prevents price tampering, forged tickets, and premature ticket issuance.

---

## 🚀 Overview

This system enables:

- 💳 Secure payments via Stripe PaymentIntent API  
- 🎟 Ticket issuance only after webhook-confirmed payment  
- 🔏 Cryptographically signed QR codes  
- 📵 Fully offline ticket verification  
- 🛡 Replay protection on scanning device  

Unlike traditional ticketing systems, this platform does not rely on internet connectivity for entry validation and does not trust frontend inputs.

---

## ⚙️ Tech Stack

### Backend
- **Node.js + Express**
- **MongoDB (Mongoose)**
- **Stripe PaymentIntent + Webhooks**
- **Ed25519 Digital Signatures (Node crypto)**
- Helmet, Rate Limiting, Strict CORS
- Docker-ready deployment

### Frontend
- HTML / CSS / JavaScript
- Custom Stripe Elements integration

### Mobile Scanner
- React Native
- Offline QR signature verification
- SQLite-based replay protection

---

## 🔒 Core Security Features

- Server-side price calculation (no client trust)
- Webhook-driven ticket generation
- UUID-based ticket IDs
- Idempotent payment handling
- Private key stored securely in backend only
- Public key embedded in scanner app
- Offline cryptographic verification

---

## 🏗 Architecture

Layered structure:

- No business logic in controllers  
- No DB logic in services  
- Stripe isolated in dedicated service  
- Cryptography isolated in crypto module  

---

## 🎯 Why This Project Stands Out

This is not a CRUD demo.

It demonstrates:

- Secure payment system integration
- Webhook-based state management
- Applied public-key cryptography
- Offline trust validation
- Production-grade backend discipline

---

## 📌 Status

Version 1 (Single Event)

Planned future enhancements:
- Multi-event support
- Organizer dashboard
- Online fallback verification
- Entry/exit tracking
- Multi-device scan sync

---

**Built with a focus on security, scalability, and real-world deployment readiness.**