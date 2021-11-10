package controllers

import (
	model "backend/modules/user/models"

	"github.com/gin-gonic/gin"
)

func Join (ctx *gin.Context) {

	body := model.PostUser{}

	ctx.BindJSON(&body)

	user := model.User{
		Fullname: body.Fullname,
		PhoneNumber: body.PhoneNumber,
		Password: body.Password,
	}

	newUser, ok := model.Join(user)

	if ok {
		ctx.JSON(201, newUser)
	} else {
		ctx.JSON(400, nil)
	}
}
