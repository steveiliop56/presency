package main

import (
	"context"
	"fmt"
	"time"

	"github.com/hugolgst/rich-go/client"
)

// App struct
type App struct {
	ctx context.Context
}

// Return struct
type Return struct {
	Success bool
	Message string
}

// Form values strcut
type Form map[string]string
	  
// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// ConnectDiscord connects to Discord using the given ID
func (a *App) ConnectDiscord(id string) (Return) {
	// Define return struct
	var result Return

	// Create discord client
	discordErr := client.Login(id)

	// If error, return error
	if discordErr != nil {
		println("Error:", discordErr.Error())
		result.Message = discordErr.Error()
		result.Success = false
		return result
	}

	// Return success
	result.Message = "Connected to Discord"
	result.Success = true

	return result 
}

// SetStatus sets the Discord status
func (a *App) SetStatus(form Form) (Return) {
	// Define return struct
	var result Return

	// Set status
	now := time.Now()
	activityErr := client.SetActivity(client.Activity{
		State: form["state"],
		Details: form["details"],
		LargeImage: form["largeImageKey"],
		LargeText: form["largeImageText"],
		SmallImage: form["smallImageKey"],
		SmallText: form["smallImageText"],
		Timestamps: &client.Timestamps{
			Start: &now,
		},
	})

	// If error, return error
	if activityErr != nil {
		fmt.Println("Error:", activityErr.Error())
		result.Message = activityErr.Error()
		result.Success = false
		return result
	}

	// Return success
	result.Message = "Status set"
	result.Success = true

	return result;
}