Get-ChildItem -Path src -Recurse -Include *.ts, *.html | ForEach-Object {
  $content = Get-Content -Path $_.FullName -Raw
  if ($content -match '<<<<<<< HEAD') {
    # Remove conflict markers - keep everything (simple approach)
    $resolved = $content -replace '<<<<<<< HEAD', ''
    $resolved = $resolved -replace '=======', ''
    $resolved = $resolved -replace '>>>>>>> .*', ''
    $resolved | Set-Content -Path $_.FullName -Force
    Write-Host "Fixed: $($_.Name)"
  }
}
Write-Host "Done!"
