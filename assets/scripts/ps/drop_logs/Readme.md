?? Example Output
<br>
APPEND Mode (run twice)
<br>
Code
<br>
timestamp, note,, 2025-00-00 00:00:00.001, created .csv log
<br>
timestamp, note,, 2025-00-00 00:00:00.000, created .csv log
<br>
OVERWRITE Mode (run twice)
<br>
Code
<br>
timestamp, note,, 2025-00-00 00:00:00.001, created .csv log
<br>
<br>
??? Running the Script
<br>
Save the script
<br>
Copy the full annotated script into a file.
<br>
Save it as something like:
<br>
Code
<br>
C:\scripts\drop_logs.ps1
<br>
Open PowerShell
<br>
Press Win + R, type powershell, and hit Enter.
<br>
Or open Windows Terminal and select PowerShell.
<br>
Run the script with parameters
<br>
For APPEND mode (default):
<br>
powershell
powershell.exe -ExecutionPolicy Bypass -File "C:\scripts\drop_logs.ps1" -Mode APPEND
<br>
For OVERWRITE mode:
<br>
powershell
powershell.exe -ExecutionPolicy Bypass -File "C:\scripts\drop_logs.ps1" -Mode OVERWRITE
<br>
<br>
?? What Happens
<br>
The script will walk through C:\ and every subfolder.
<br>
In each folder, it will create or update a log.csv.
<br>
Each line will look like:
<br>
Code
timestamp, note,, 2025-00-00 00:00:00.001, created .csv log
<br>
If you change $NoteText in the script, that message will be written with the timestamp of the update.
<br>
<br>
?? Quick Test
<br>
To confirm it’s working:
<br>
Run in APPEND mode.
<br>
Check any folder under C:\ — you should see a log.csv.
<br>
Run again — the file should now have two lines (each with a new timestamp).
<br>
Switch to OVERWRITE mode — the file should now contain only one line (the latest timestamp).
<br>
Code of the updated script:
<br>
