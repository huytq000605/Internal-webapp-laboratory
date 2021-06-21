const validate = (inputs) => {
	const errors = {};
	if (inputs.fullname.length > 45)
		errors.fullname = "Too long!!!(max 45 char)";

	const id = inputs.studentId;
	const check = id.substring(0, 2);
	if (
		!(check === "20" && id.length === 8 && id.match(/^\d{8}/)) &&
		id.length > 0
	)
		errors.studentId = "Wrong format";
	// const facultyData = [
	// 	"Điện",
	// 	"Điện tử viễn thông",
	// 	"Vật lý kĩ thuật",
	// 	"Toán ứng dụng và Tin học",
	// 	"Sư phạm Kỹ thuật",
	// 	"Ngoại ngữ",
	// 	"Kỹ thuật Hóa học",
	// 	"Kinh tế và Quản lý",
	// 	"Khoa học và Kỹ thuật Vật liệu",
	// 	"Khoa học và Công nghệ Nhiệt lạnh",
	// 	"Khoa học và Công nghệ Môi trường",
	// 	"Dệt may - Da giầy và Thời trang",
	// 	"Công nghệ Thông tin và Truyền thông",
	// 	"Công nghệ Sinh học và Công nghệ Thực phẩm",
	// 	"Cơ khí Động lực",
	// 	"Cơ khí",
	// 	"Lý luận Chính trị",
	// 	"Giáo dục Thể chất",
	// 	"Giáo dục Quốc phòng & An ninh",
	// ];
	// const specialtyData = [
	// 	"Hệ thống điện",
	// 	"Kĩ thuật đo và tin học công nghiệp",
	// 	"Tự động hoá công nghiệp",
	// 	"Điều khiển tự động",
	// ];

	return errors;
};
export default validate;
