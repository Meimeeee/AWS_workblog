const fs = require('fs');
const path = require('path');

const worklogDir = path.join(__dirname, 'content', '1-Worklog');

const viReplacements = {
  "Mục tiêu Tuần": "Nhiệm vụ trọng tâm Tuần",
  "Tuần này tập trung vào việc": "Trọng tâm của tuần này là",
  "Các mục tiêu chính bao gồm:": "Các nhiệm vụ cốt lõi gồm có:",
  "Tổng quan công việc": "Tóm tắt các đầu việc",
  "Ngày bắt đầu": "Bắt đầu",
  "Ngày hoàn thành": "Kết thúc",
  "Nhiệm vụ": "Nội dung công việc",
  "Tài liệu tham khảo": "Nguồn tham khảo",
  "Kết quả đạt được": "Thành tựu đạt được",
  "Những gì đã hoàn thành": "Các công việc đã hoàn tất",
  "Tóm tắt nguyên tắc": "Tổng kết nguyên tắc",
  "Tóm tắt kiến trúc": "Cấu trúc tổng quan",
  "Làm quen": "Bước đầu tiếp cận",
  "Tìm hiểu": "Nghiên cứu",
  "Tổng quan": "Khái quát",
  "Hiểu rõ": "Nắm bắt được",
  "Nắm vững": "Trang bị kiến thức",
  "Triển khai": "Thực thi",
  "Thiết lập": "Cài đặt",
  "Thực hành": "Thao tác"
};

const enReplacements = {
  "Week (\\d+) Objectives": "Key Goals for Week $1",
  "This week focused on": "The primary focus of this week was",
  "The key objectives included:": "Main goals were as follows:",
  "Tasks Overview": "Summary of Work",
  "Start Date": "Begun On",
  "Completion Date": "Finished On",
  "References": "Sources",
  "Achievements": "Key Accomplishments",
  "What was accomplished": "Successful Deliverables",
  "Best Practices Summary": "Overview of Guiding Principles",
  "Architecture Summary": "High-Level Architecture",
  "Learn": "Study",
  "Get familiar with": "Become acquainted with",
  "Overview": "High-level review",
  "Gained a solid understanding of": "Acquired comprehensive knowledge of",
  "Successfully": "Effectively",
  "Set up": "Configured",
  "Deploy": "Implement",
  "Practice": "Engage in"
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  const isVi = filePath.endsWith('.vi.md');
  
  if (isVi) {
    for (const [key, value] of Object.entries(viReplacements)) {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, value);
    }
  } else {
    // English replacements
    for (const [key, value] of Object.entries(enReplacements)) {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, value);
    }
    // Also replace "Task" individually for table
    content = content.replace(/\| Task \|/g, '| Work Item |');
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Paraphrased: ${path.basename(filePath)}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

processDirectory(worklogDir);
console.log("All worklog files processed successfully.");
