package models

import (
	"time"

	takeaway "backend/modules/takeaway/models"
	chapter "backend/modules/chapter/models"

	"gopkg.in/guregu/null.v4"
)

type Course struct {
	Id uint							`json:"id" gorm:"column:course_id;primaryKey"`
	Name string						`json:"name"`
	CoverPath null.String			`json:"coverPath"`
	CreatedAt time.Time				`json:"createdAt"`
}

type SingleCourse struct {
	*Course
	Takeaways []takeaway.Takeaway	`json:"takeaways" gorm:"foreignKey:TakeawayRefer"`
	Chapters []chapter.Chapter		`json:"chapters" gorm:"foreignKey:ChapterRefer"`
}
