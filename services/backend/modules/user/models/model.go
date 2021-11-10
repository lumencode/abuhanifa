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

type JoinUser struct {
	PhoneNumber string
	Password string
	Fullname string
}

type LoginUser struct {
	PhoneNumber string	`json:"phoneNumber"`
	Password string		`json:"password"`
}
