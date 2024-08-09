package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Fdsytu666666666s")
    router := gin.Default()

    // Пример простого маршрута
    router.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Hello from Gin!",
        })
    })

    // Запуск сервера на порту 8080
    router.Run(":8080")
}

