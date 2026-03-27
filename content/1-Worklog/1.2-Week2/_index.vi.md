---
title: "Worklog Tuần 2"
date: 2026-01-12
weight: 2 
chapter: false
pre: " <b> 1.2. </b> "
---

### Nội dung công việc trọng tâm Tuần 2

Trọng tâm của tuần này là xây dựng nền tảng về quản lý truy cập và kiến trúc mạng trong AWS, từ cơ bản đến nâng cao. Các nhiệm vụ cốt lõi gồm có:

- **Quản lý IAM**:
  - Tạo Users và Groups
  - Gắn Policies phù hợp
  - Tạo và sử dụng IAM Roles
  - Thao tác **Switch Role**

- **Trang bị kiến thức VPC Networking**:
  - Hiểu tổng quan kiến trúc VPC
  - So sánh **Security Groups vs Network ACLs**
  - Chuẩn bị môi trường mạng cho EC2

- **Thực thi EC2**:
  - Launch EC2 trong subnet
  - Cấu hình Security Group
  - Kết nối SSH bằng Key Pair

- **Cấu hình Hybrid DNS với Route 53 Resolver**:
  - Tạo Key Pair
  - Cấu hình Security Group
  - Cấu hình DNS:
    - Tạo Outbound Endpoint
    - Tạo Resolver Rules
    - Tạo Inbound Endpoint
  - Dọn dẹp tài nguyên

- **Cài đặt VPC Peering**:
  - Giới thiệu cơ chế Peering
  - Sử dụng CloudFormation để khởi tạo hạ tầng
  - Tạo Security Group & EC2
  - Cập nhật Network ACLs
  - Cài đặt Peering Connection
  - Cập nhật Route Tables
  - Bật Cross-Peer DNS

- **Thực thi AWS Transit Gateway**:
  - Tạo Transit Gateway
  - Tạo Attachments cho các VPC
  - Cấu hình Route Tables cho Transit Gateway
  - Cập nhật Route Tables của VPC

---

### Tóm tắt các đầu việc

| Ngày | Nội dung công việc | Bắt đầu | Kết thúc | Nguồn tham khảo |
|:----:|---------|:------------:|:---------------:|-------------------|
|  2   | **IAM & EC2 cơ bản**:<br>- Tạo Users, Groups<br>- Gắn Policies<br>- Tạo Role & Switch Role<br>- Launch EC2 + SSH | 12/01/2026 | 12/01/2026 | [AWS Study Group](https://www.facebook.com/groups/awsstudygroupfcj/) |
|  3   | **VPC Networking**:<br>- Khái quát VPC<br>- So sánh Security Group vs NACL<br>- Chuẩn bị subnet cho EC2 | 13/01/2026 | 13/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  4   | **Hybrid DNS (Route 53 Resolver)**:<br>- Tạo Key Pair<br>- Cấu hình Security Group<br>- Tạo Outbound / Inbound Endpoint<br>- Tạo Resolver Rules | 14/01/2026 | 14/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  5   | **VPC Peering**:<br>- Tạo CloudFormation Template<br>- Tạo EC2 & SG<br>- Cài đặt Peering<br>- Update Route Tables<br>- Enable DNS | 15/01/2026 | 15/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  6   | **Transit Gateway**:<br>- Tạo TGW<br>- Attach VPC<br>- Cấu hình Route Tables | 16/01/2026 | 16/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |

---

### Thành tựu đạt được

#### Các công việc đã hoàn tất

- Nắm bắt được cơ chế phân quyền với **IAM** và thực hành thành công **Switch Role**
- Trang bị kiến thức kiến trúc mạng **VPC** và cơ chế bảo mật với Security Group
- Thực thi thành công **EC2** và kết nối SSH
- Cấu hình thành công **Hybrid DNS** với Route 53 Resolver
- Thực thi **VPC Peering** để kết nối Dev và Staging
- Thực thi **AWS Transit Gateway** làm trung tâm kết nối nhiều VPC
- Bước đầu tiếp cận với **Infrastructure as Code** thông qua CloudFormation
- Thực hiện **dọn dẹp tài nguyên** sau khi hoàn thành

#### Cấu trúc tổng quan

- **Phân quyền IAM**: Users → Groups → Policies → Roles
- **Mạng VPC**:
  - Security Group: kiểm soát instance
  - NACL: kiểm soát subnet
- **Hybrid DNS**:
  - On-prem ↔ AWS qua Route 53 Resolver
- **Kết nối mạng**:
  - VPC Peering: point-to-point
  - Transit Gateway: hub-and-spoke
