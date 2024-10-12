package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	appErr := wails.Run(&options.App{
		Title:  "Presency",
		Width:  400,
		Height: 600,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		DisableResize: true,
		BackgroundColour: &options.RGBA{R: 49, G: 51, B: 56, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	// If error, log it
	if appErr != nil {
		println("Error:", appErr.Error())
	}
}
