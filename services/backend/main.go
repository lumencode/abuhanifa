package main

import (

	"log"
	"fmt"

	// Load modules
	pathway "backend/modules/pathway/controllers"
	course "backend/modules/course/controllers"
	takeaway "backend/modules/takeaway/controllers"
	chapter "backend/modules/chapter/controllers"

	// Load middlewares
	"backend/middlewares"

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

	r.Use(middlewares.Cors())

	// PATHWAYS
	pathways := r.Group("/pathways")
	pathways.GET("/", pathway.Get)

	// COURSES
	courses := r.Group("/courses")
	courses.GET("/", course.Get)
	courses.GET("/:courseId", course.GetById)
	courses.GET("/pathway/:pathwayId", course.GetByPathwayId)

	// TAKEAWAYS
	takeaways := r.Group("/takeaways")
	takeaways.GET("/:courseId", takeaway.GetByCourseId)

	// CHAPTERS
	chapters := r.Group("/chapters")
	chapters.GET("/:courseId", chapter.GetByCourseId)

	fmt.Println(":8080")

	r.Run()
}
