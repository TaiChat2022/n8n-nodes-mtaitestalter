class mtaiTestAlter {
  description = {
    displayName: 'Mtai Test Alter',
    name: 'mtaiTestAlter',
    group: ['transform'],
    version: 1,
    description: 'Test node to show alert',
    defaults: {
      name: 'Mtai Test Alter',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [],
  };

  async execute() {
    // Đơn giản chỉ hiển thị thông báo
    console.log('1234');  // Dùng console.log thay vì alert để chạy trong môi trường Node.js

    // Trả về dữ liệu trống vì không có dữ liệu yêu cầu trả về
    return [[]];
  }
}

module.exports = { mtaiTestAlter };