package models

import (
	"backend/utils"
)

func Get() []User {
	var users []User
	utils.DB.Find(&users)
	return users
}
