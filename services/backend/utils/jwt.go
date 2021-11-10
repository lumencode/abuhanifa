package utils

import (
	"log"
	"time"
	jwt "github.com/dgrijalva/jwt-go"
)

var jwtKey []byte

type Payload struct{
	Id uint
	jwt.StandardClaims
}

func InitJWT (key string) {
	jwtKey = []byte(key)
}

func JWTSign(id uint) string {

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, Payload{
		Id:	id,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24 * 7).Unix(),
		},
	})

	tokenString, err := token.SignedString(jwtKey)

	if err != nil {
		log.Fatal(err.Error())
	}

	return tokenString
}

func JWTVerify(t string) (uint, bool) {

	payload := &Payload {}

	token, _ := jwt.ParseWithClaims(t, payload, func(t *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})

	return payload.Id, token.Valid
}
