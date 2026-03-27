---
title: "Worklog Tuần 4"
date: 2026-01-26
weight: 4 
chapter: false
pre: " <b> 1.4. </b> "
---

### Nội dung công việc trọng tâm Tuần 4

Trọng tâm của tuần này là vận hành hệ thống theo mô hình thực tế (production-ready), bao gồm tự động hóa, bảo mật, độ tin cậy, hiệu năng và tối ưu chi phí dựa trên AWS Well-Architected Framework.

- **Vận hành (Operational Excellence)**:
  - Tự động hóa tác vụ bằng AWS Lambda (tắt EC2, gửi thông báo Slack)
  - Xây dựng hệ thống giám sát với CloudWatch và Grafana
  - Quản lý tài nguyên EC2 dựa trên Tags
  - Tự động hóa vận hành với AWS Systems Manager

- **Bảo mật (Security)**:
  - Áp dụng IAM Permission Boundary để giới hạn quyền
  - Kiểm tra bảo mật với AWS Security Hub
  - Bảo vệ ứng dụng bằng AWS WAF

- **Độ tin cậy (Reliability)**:
  - Cài đặt backup với AWS Backup
  - Kết nối VPC bằng VPC Peering
  - Quản lý mạng tập trung với Transit Gateway

- **Hiệu năng (Performance Efficiency)**:
  - Container hóa ứng dụng bằng Docker và triển khai trên ECS
  - Xây dựng CI/CD pipeline với CodePipeline
  - Lưu trữ dữ liệu với File Storage Gateway

- **Tối ưu chi phí (Cost Optimization)**:
  - Áp dụng Savings Plans và Reserved Instances
  - Right-sizing EC2
  - Theo dõi và trực quan hóa chi phí

---

### Tóm tắt các đầu việc

| Ngày | Nội dung công việc | Bắt đầu | Kết thúc | Nguồn tham khảo |
|:----:|---------|:------------:|:---------------:|-------------------|
|  2   | **Automation & Monitoring**:<br>- AWS Lambda<br>- CloudWatch + Grafana<br>- EC2 Tagging<br>- Systems Manager | 26/01/2026 | 26/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  3   | **Security**:<br>- IAM Permission Boundary<br>- Security Hub<br>- AWS WAF | 27/01/2026 | 27/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  4   | **Reliability**:<br>- AWS Backup<br>- VPC Peering<br>- Transit Gateway | 28/01/2026 | 28/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  5   | **Performance**:<br>- Docker + ECS<br>- CodePipeline<br>- File Storage Gateway | 29/01/2026 | 29/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  6   | **Cost Optimization**:<br>- Savings Plans<br>- Reserved Instances<br>- Cost Visualization | 30/01/2026 | 30/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |

---

### Thành tựu đạt được

#### Các công việc đã hoàn tất

- Tự động hóa vận hành:
  - Tự động tắt EC2 và gửi thông báo bằng Lambda
  - Xây dựng dashboard giám sát với CloudWatch và Grafana
  - Quản lý tài nguyên bằng Tags và Systems Manager

- Tăng cường bảo mật:
  - Áp dụng **IAM Permission Boundary**
  - Thực thi **AWS WAF**
  - Kiểm tra bảo mật với **Security Hub**

- Nâng cao độ tin cậy:
  - Cài đặt backup tự động với **AWS Backup**
  - Kết nối mạng ổn định qua **VPC Peering** và **Transit Gateway**

- Tối ưu hiệu năng:
  - Thực thi ứng dụng container với **Docker + ECS**
  - Xây dựng CI/CD pipeline

- Tối ưu chi phí:
  - Áp dụng **Savings Plans / Reserved Instances**
  - Thực hiện **Right-sizing EC2**
  - Theo dõi chi phí sử dụng

#### Cấu trúc tổng quan

- **Automation**: Lambda + Systems Manager
- **Monitoring**: CloudWatch + Grafana
- **Security**: IAM Boundary + WAF + Security Hub
- **Networking**: VPC Peering + Transit Gateway
- **Compute**: ECS (Docker containers)
- **CI/CD**: CodePipeline
- **Storage**: File Storage Gateway
- **Cost**: Savings Plans + Cost Monitoring
