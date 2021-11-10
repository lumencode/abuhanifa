package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main () {

	InitDatabase(
		DatabaseConfig{
			Host: "localhost",
			User: "muhammad",
			Password: "math",
			Port: "5432",
			Database: "abuhanifa",
			Timezone: "Asia/Tashkent",
		},
	)

	r := gin.Default()

	InitRoutes(r)

	fmt.Println(":8080")

	r.Run()
}
