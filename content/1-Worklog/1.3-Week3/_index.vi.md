---
title: "Worklog Tuần 3"
date: 2026-01-19
weight: 3 
chapter: false
pre: " <b> 1.3. </b> "
---

### Nội dung công việc trọng tâm Tuần 3

Trọng tâm của tuần này là phát triển ý tưởng dự án cuối kỳ và thực hành các dịch vụ cốt lõi của AWS như EC2, S3, IAM và RDS. Các nhiệm vụ cốt lõi gồm có:

- **Phát triển dự án cuối kỳ**:
  - Lên ý tưởng dự án
  - Phân tích và lựa chọn các dịch vụ AWS phù hợp
  - Xây dựng kiến trúc sơ bộ

- **Thao tác EC2**:
  - Nghiên cứu dịch vụ EC2
  - Thực thi máy ảo
  - Cấu hình instance
  - Tạo và sử dụng AMI tùy chỉnh

- **Quản lý truy cập & môi trường phát triển**:
  - Nghiên cứu và thực hành IAM Role
  - Bước đầu tiếp cận với Cloud9

- **Lưu trữ và quản lý dữ liệu**:
  - Cấu hình Amazon S3
  - Quản lý dữ liệu và quyền truy cập

- **Cơ sở dữ liệu với RDS**:
  - Tạo database
  - Quản lý và vận hành RDS

- **Ôn tập & củng cố kiến thức**:
  - Ôn lại IAM, EC2, S3, RDS
  - Tổng hợp kiến thức từ Tuần 1 và 2

---

### Tóm tắt các đầu việc

| Ngày | Nội dung công việc | Bắt đầu | Kết thúc | Nguồn tham khảo |
|:----:|---------|:------------:|:---------------:|-------------------|
|  2   | **Định hướng dự án**:<br>- Lên ý tưởng<br>- Chọn dịch vụ AWS<br>- Phác thảo kiến trúc | 19/01/2026 | 19/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  3   | **EC2 & AMI**:<br>- Thực thi EC2<br>- Cấu hình máy ảo<br>- Tạo AMI tùy chỉnh | 20/01/2026 | 20/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  4   | **IAM Role & Cloud9**:<br>- Thao tác IAM Role<br>- Bước đầu tiếp cận Cloud9 | 21/01/2026 | 21/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  5   | **S3 Storage**:<br>- Cấu hình S3<br>- Public access<br>- Versioning | 22/01/2026 | 22/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |
|  6   | **RDS & Review**:<br>- Tạo database RDS<br>- Quản lý DB<br>- Ôn tập tổng hợp | 23/01/2026 | 23/01/2026 | [AWS Docs](https://cloudjourney.awsstudygroup.com/) |

---

### Thành tựu đạt được

#### Các công việc đã hoàn tất

- Xây dựng ý tưởng và kiến trúc cho **dự án cuối kỳ**
- Thành thạo triển khai và quản lý nhiều **EC2 instances**
- Tạo và sử dụng **AMI tùy chỉnh**
- Hiểu và áp dụng **IAM Role** trong thực tế
- Bước đầu tiếp cận môi trường phát triển **Cloud9**
- Xây dựng thành công **website tĩnh trên S3**:
  - Public access
  - Versioning
  - Replication (multi-region)
- Tạo và vận hành cơ sở dữ liệu trên **Amazon RDS**
- Củng cố kiến thức từ các tuần trước

#### Cấu trúc tổng quan

- **Compute**: EC2 + AMI tùy chỉnh
- **Storage**: S3 (Static Website + Versioning + Replication)
- **Database**: RDS (Managed DB)
- **Access Control**: IAM Role
- **Dev Environment**: Cloud9
