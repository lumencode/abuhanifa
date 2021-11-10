package models

import (
	"backend/utils"
)

func Join(user User) (User, bool) {
	result := utils.DB.Table("users").Create(&user)
	return user, result.Error == nil
}
