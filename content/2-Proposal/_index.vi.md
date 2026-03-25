---
title: "Proposal"
date: 2026-03-24
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# EV Charging Station Management System

# Nền tảng Full-Stack cho vận hành trạm sạc và thanh toán số

### 1. Executive Summary

Hệ thống EV Charging Station Management System là một nền tảng full-stack được thiết kế để hỗ trợ toàn bộ vòng đời vận hành của dịch vụ sạc xe điện, bao gồm cả **backend xử lý nghiệp vụ** và **frontend tương tác người dùng**.

Hệ thống quản lý các quy trình cốt lõi như tìm kiếm trạm sạc, đặt lịch theo khung giờ, xác nhận booking, theo dõi phiên sạc, tạo hóa đơn, xử lý thanh toán và quản lý vi phạm người dùng trong một nền tảng thống nhất.

Ở phía backend, hệ thống được xây dựng trên Spring Boot và tích hợp với hạ tầng cloud. Ở phía frontend, hệ thống cung cấp giao diện web theo từng vai trò (driver, staff, admin), đảm bảo trải nghiệm người dùng xuyên suốt.

Frontend giao tiếp với backend thông qua một lớp API chuẩn hóa sử dụng Axios và JWT, bao gồm các domain như authentication, station, booking, charging session, payment, notification và reporting.

Hệ thống tích hợp VNPay cho thanh toán, AWS S3 và CloudFront cho frontend, Amazon RDS cho database, AWS Map cho bản đồ và SMTP cho gửi email.

Giải pháp này giúp các đơn vị vận hành trạm sạc số hóa quy trình, tăng hiệu suất sử dụng trạm, cải thiện trải nghiệm khách hàng và sẵn sàng mở rộng trong tương lai.

---

### 2. Problem Statement

#### Vấn đề hiện tại

Khi số lượng xe điện tăng nhanh, các đơn vị vận hành phải đối mặt với nhiều thách thức cả về backend lẫn frontend:

- Thiếu khả năng hiển thị trạng thái slot theo thời gian thực
- Quy trình booking và check-in chưa tối ưu
- Chậm trễ trong tạo hóa đơn và đối soát thanh toán
- Khó kiểm soát vi phạm người dùng (overstay, misuse)
- Hệ thống frontend và backend chưa tích hợp chặt chẽ
- Trải nghiệm người dùng không đồng nhất giữa các vai trò
- Phụ thuộc nhiều vào localStorage/sessionStorage
- API chưa được chuẩn hóa

#### Vấn đề phía frontend

- Logic nghiệp vụ nằm trực tiếp trong page → khó tái sử dụng
- Gọi API không đồng nhất
- Chưa có cơ chế quản lý server state (React Query/SWR)
- Bundle lớn, polling nhiều → ảnh hưởng performance
- Navigation chưa nhất quán (mix redirect và SPA)

Nếu không có kiến trúc full-stack chuẩn hóa, hệ thống sẽ khó mở rộng, khó maintain và dễ phát sinh lỗi.

---

#### Giải pháp

Giải pháp đề xuất là một **nền tảng full-stack thống nhất**, bao gồm:

- Backend trung tâm xử lý toàn bộ nghiệp vụ
- Frontend theo kiến trúc role-based + domain-based
- Lớp API chuẩn hóa giữa frontend và backend
- Tách module theo domain (auth, booking, charging, payment...)
- Giảm phụ thuộc vào browser storage
- Tối ưu hiệu năng frontend

Các chức năng chính:

- Authentication và phân quyền
- Booking và quản lý slot
- Quản lý phiên sạc
- Tạo hóa đơn và thanh toán VNPay
- Loyalty và compliance
- Hosting frontend qua S3 + CloudFront
- API routing qua Nginx
- Map integration qua AWS Map
- Background jobs

---

#### Lợi ích

- **Tăng hiệu suất sử dụng trạm**
- **Cải thiện UX**
- **Giảm technical debt**
- **Dễ mở rộng**
- **Dễ maintain**
- **Tăng độ ổn định hệ thống**

---

### 3. Solution Architecture

Hệ thống sử dụng kiến trúc **full-stack nhiều lớp**, tách biệt rõ:

- Frontend
- Backend
- Database

Người dùng truy cập frontend qua CloudFront (S3). Frontend gọi API qua Axios (JWT). Nginx route request vào backend Spring Boot. Dữ liệu lưu trên RDS SQL Server.

![EV Charging System Architecture](/images/2-Proposal/aws-ev-architecture.png)

| Component | Service / Technology |
| --------------------- | -------------------------- |
| Frontend Framework | React (Vite) |
| Frontend Hosting | Amazon S3 |
| CDN Delivery | Amazon CloudFront |
| State Management | Redux (Auth) + Local State |
| API Communication | Axios + Interceptors |
| Map Integration | AWS Map |
| Reverse Proxy | Nginx |
| Backend Framework | Spring Boot 3.5.6 |
| Programming Language | Java 17 |
| API Layer | REST Controllers |
| Business Layer | Service |
| Persistence Layer | JPA + Hibernate |
| Database | Amazon RDS for SQL Server |
| Authentication | JWT + OAuth2 |
| Payment Gateway | VNPay |
| Email Notification | SMTP |
| Background Jobs | Scheduler + Async |

---

#### Kiến trúc Frontend

Frontend hiện tại tổ chức theo:

- Pages theo role (driver, staff, admin)
- Components (UI + business)
- API layer
- Layouts theo role
- Routing có bảo vệ

Hiện trạng:
- Vẫn theo kiểu page-based
- Business logic nằm trong page

Hướng cải tiến:

- Chuyển sang **feature-based architecture**
- Dùng **React Query**
- Chuẩn hóa API
- Lazy loading theo role

---

#### Kiến trúc Backend

Backend theo layered architecture:

- Controller → Service → Repository

Module:

- Auth
- Booking
- Charging Session
- Payment
- Loyalty
- Compliance
- Notification

---

### 4. Technical Implementation

#### Workflow Engine

Hệ thống sử dụng rule-based:

- Slot phải available mới được đặt
- Giới hạn slot liên tiếp
- Booking → QR
- Charging → invoice
- Payment → VNPay
- Violation → grouping

Frontend hỗ trợ:

- Validate booking
- Simulate SOC
- Quản lý flow nhiều bước

---

#### Technical Requirements

- Frontend: React + Axios + JWT
- Backend: Spring Boot
- Database: RDS SQL Server
- Cloud: AWS
- Payment: VNPay
- Notification: SMTP

---

### 5. Timeline & Milestones

- Week 7-8: Setup core system
- Week 8: Booking + session
- Week 9: Payment + map
- Week 10: Loyalty + compliance
- Week 11: Testing
- Week 12: Deploy

---

### 6. Budget Estimation

(Giữ nguyên như file gốc) :contentReference[oaicite:0]{index=0}

---

### 7. Risk Assessment

#### Rủi ro frontend

- Phụ thuộc localStorage
- API không đồng nhất
- Bundle lớn
- Polling nhiều
- Navigation lỗi

#### Giảm thiểu

- React Query
- API chuẩn hóa
- Lazy loading
- Giảm polling
- Tối ưu state

---

### 8. Expected Outcomes

#### Cải thiện kỹ thuật

- Full-stack integration
- UX tốt hơn
- Code sạch hơn
- Dễ mở rộng

#### Giá trị dài hạn

- Sẵn sàng microservices
- Hỗ trợ mobile
- Phân tích dữ liệu
- Mở rộng hệ sinh thái EV