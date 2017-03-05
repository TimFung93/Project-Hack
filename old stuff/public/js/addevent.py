from apiclient.discovery import build
from httplib2 import httplib2
from oauth2client import file, client, tools

try:
	import argparse
	flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
	flags = None

SCOPES = 'https://www.googleapis.com/calendar/v3/calendars'
store = file.Storage('storage.json')
creds = store.get()

if not creds or creds.invalid:
	flow = client.flow_from_clientsecrets('client_secret.json', SCOPES)
	creds = tools.run_flow(flow,store,flags) \
			if flags else tools.run(flow,store)
CAL = build('calendar', 'v3', http=creds.authorize(Http()))

GMT_OFF = '-07:00'
EVENT = {
	'summary': 'making sure this python test works',
	'start' : {"dateTime" : '2017-03-05T23:00:00' % GMT_OFF},
	'end' : {"dateTime" : '2017-03-05T24:00:00' % GMT_OFF},
	'attendees' : [],
}

e = CAL.events().insert(calendarID='primary',
		sendNotifications=True, body=EVENT).execute()