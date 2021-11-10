package models

import (
	"time"
)

type User struct {
	Id uint				`json:"id" gorm:"column:user_id;primaryKey"`
	PhoneNumber string	`json:"-"`
	Password string		`json:"-"`
	Fullname string		`json:"fullName"`
	CreatedAt time.Time	`json:"createdAt"`
}

type PostUser struct {
	PhoneNumber string
	Password string
	Fullname string
}
