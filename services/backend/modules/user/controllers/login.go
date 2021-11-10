package controllers

import (
	"backend/utils"
	model "backend/modules/user/models"

	"github.com/gin-gonic/gin"
)

func Login (ctx *gin.Context) {

	body := model.LoginUser{}

	ctx.BindJSON(&body)

	user, ok := model.Login(body)

	if ok {
		ctx.JSON(201, gin.H{
			"accessToken": utils.JWTSign(user.Id),
			"user": user,
		})
	} else {
		ctx.JSON(401, nil)
	}
}
