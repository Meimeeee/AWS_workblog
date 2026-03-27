---
title: "Worklog Tuần 1"
date: 2026-01-05
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Nội dung công việc trọng tâm Tuần 1

Trọng tâm của tuần này là làm quen với AWS, thiết lập môi trường ban đầu và xây dựng nền tảng về quản lý tài khoản và chi phí. Các nhiệm vụ cốt lõi gồm có:

- **Nghiên cứu tổng quan AWS**:
  - Hiểu cách AWS hoạt động và mô hình Cloud
  - Nghiên cứu các dịch vụ cốt lõi (EC2, S3, IAM, VPC,...)

- **Bước đầu tiếp cận môi trường lab**:
  - Hiểu cấu trúc bài lab
  - Bước đầu tiếp cận với quy trình thực hành

- **Làm việc nhóm**:
  - Lập nhóm
  - Bước đầu tiếp cận và giao lưu với các thành viên

- **Cài đặt tài khoản AWS**:
  - Tạo tài khoản AWS (Free Tier)
  - Bật **MFA cho Root User**
  - Tạo IAM User quản trị
  - Tạo Group và gán quyền Administrator
  - Bước đầu tiếp cận AWS Console

- **Quản lý chi phí với AWS Budgets**:
  - Tạo Cost Budget
  - Tạo Usage Budget
  - Tạo Reservation Budget
  - Tạo Savings Plans Budget
  - Cấu hình cảnh báo
  - Dọn dẹp tài nguyên

---

### Tóm tắt các đầu việc

| Ngày | Nội dung công việc | Bắt đầu | Kết thúc | Nguồn tham khảo |
|:----:|----------|:------------:|:---------------:|-------------------|
|  2   | **Nghiên cứu AWS cơ bản**:<br>- Khái quát AWS<br>- Mô hình Cloud<br>- Các dịch vụ chính | 05/01/2026 | 05/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  3   | **Bước đầu tiếp cận Lab**:<br>- Cấu trúc bài lab<br>- Quy trình thực hành | 06/01/2026 | 06/01/2026 | [AWS Study Group](https://www.facebook.com/groups/awsstudygroupfcj/) |
|  4   | **Làm việc nhóm**:<br>- Lập nhóm<br>- Bước đầu tiếp cận thành viên<br>- Định hướng học tập | 07/01/2026 | 07/01/2026 | Nội bộ |
|  5   | **Cài đặt AWS & IAM**:<br>- Tạo account<br>- Bật MFA<br>- Tạo IAM User + Admin Group<br>- Bước đầu tiếp cận Console | 08/01/2026 | 08/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  6   | **AWS Budgets**:<br>- Tạo Cost/Usage/Reservation/Savings Plans Budget<br>- Cấu hình cảnh báo<br>- Dọn dẹp tài nguyên | 09/01/2026 | 09/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |

---

### Thành tựu đạt được

#### Các công việc đã hoàn tất

- Nắm bắt được tổng quan về **AWS** và các dịch vụ chính
- Nắm được cách triển khai và thực hành các **bài lab**
- Tham gia **làm việc nhóm**, kết nối với các thành viên
- Tạo thành công tài khoản AWS với **Free Tier (~$100 credit)**
- Bật **MFA cho Root User** để tăng bảo mật
- Tạo **IAM User riêng** để tránh sử dụng Root Account
- Bước đầu tiếp cận với **AWS Console**
- Cài đặt **AWS Budgets** để kiểm soát chi phí
- Cấu hình **cảnh báo chi phí** và dọn dẹp tài nguyên

#### Tổng kết nguyên tắc

- **Bảo mật**:
  - Không dùng Root cho daily work
  - Luôn bật MFA

- **Chi phí**:
  - Theo dõi bằng AWS Budgets
  - Alert khi vượt ngưỡng

- **Học tập**:
  - Thao tác lab
  - Làm việc nhóm
