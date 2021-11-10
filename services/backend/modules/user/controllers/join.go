package controllers

import (
	"backend/utils"
	model "backend/modules/user/models"

	"github.com/gin-gonic/gin"
)

func Join (ctx *gin.Context) {

	body := model.JoinUser{}

	ctx.BindJSON(&body)

	user := model.User{
		Fullname: body.Fullname,
		PhoneNumber: body.PhoneNumber,
		Password: body.Password,
	}

	newUser, ok := model.Create(user)

	if ok {
		ctx.JSON(201, gin.H{
			"accessToken": utils.JWTSign(newUser.Id),
			"user": newUser,
		})
	} else {
		ctx.JSON(401, nil)
	}
}
