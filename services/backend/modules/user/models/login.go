package models

import (
	"backend/utils"
)

func Login(input LoginUser) (User, bool) {
	var user User 
	result := utils.DB.Where("phone_number = ? and password = crypt(?, password)", input.PhoneNumber, input.Password).Find(&user)
	return user, result.RowsAffected > 0
}
