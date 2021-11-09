package models

import (
	"backend/utils"
)

func GetByCourseId(courseId string) []Takeaway {
	var takeaways []Takeaway
	utils.DB.Where("course_id = ?", courseId).Find(&takeaways)
	return takeaways
}
