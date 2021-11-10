package controllers

import (
	"backend/utils"
	model "backend/modules/user/models"

	"github.com/gin-gonic/gin"
)

func Get (ctx *gin.Context) {

	_, ok := utils.JWTVerify(ctx.GetHeader("access_token"))

	if ok {
		ctx.JSON(200, model.Get())
	} else {
		ctx.JSON(401, nil)
	}
}
