package main

import (
	"fmt"
	"log"

	"backend/utils"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DatabaseConfig struct {
	Host, User, Password, Port, Database, Timezone string
}

func InitDatabase (config DatabaseConfig) {

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s port=%s dbname=%s sslmode=disable TimeZone=%s",
		config.Host,
		config.User,
		config.Password,
		config.Port,
		config.Database,
		config.Timezone,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	utils.DB = db
}