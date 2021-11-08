package main

import (

	"log"
	"fmt"

	// Load modules
	pathway "backend/modules/pathway/controllers"
	course "backend/modules/course/controllers"

	"backend/utils"

	"github.com/gin-gonic/gin"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main () {

	dsn := "host=localhost user=muhammad password=math dbname=abuhanifa port=5432 sslmode=disable TimeZone=Asia/Tashkent"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	utils.DB = db

	r := gin.Default()

	// PATHWAYS
	pathways := r.Group("/pathways")
	pathways.GET("/", pathway.Get)

	// COURSES
	courses := r.Group("/courses")
	courses.GET("/", course.Get)
	courses.GET("/:pathwayId", course.GetByPathwayId)

	fmt.Println(":8080")

	r.Run()
}
