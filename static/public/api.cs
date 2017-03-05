using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CalendarQuickstart
{
    class Program
    {
        // If modifying these scopes, delete your previously saved credentials
        // at ~/.credentials/calendar-dotnet-quickstart.json
        static string[] Scopes = { CalendarService.Scope.CalendarReadonly };
        static string ApplicationName = "Google Calendar API .NET Quickstart";

        static void Main(string[] args)
        {
            UserCredential credential;

            using (var stream =
                new FileStream("client_secret.json", FileMode.Open, FileAccess.Read))
            {
                string credPath = System.Environment.GetFolderPath(
                    System.Environment.SpecialFolder.Personal);
                credPath = Path.Combine(credPath, ".credentials/calendar-dotnet-quickstart.json");

                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
                Console.WriteLine("Credential file saved to: " + credPath);
            }

            // Create Google Calendar API service.
            var service = new CalendarService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
            // Here is the beginning of Zhili (Jerry) Pan's code
            Event aNewEvent = new Event() {
                Summary = "New Event",
                Location = "101 College Street",
                Start = new EventDateTime() {
                    DateTime = new DateTime(17, 3, 20, 15, 0, 0),
                    TimeZone = "Canada/Toronto"
                },
                End = new EventDateTime() {
                    DateTime = new DateTime(17, 3, 21, 15, 0, 0),
                    TimeZone = "Canada/Toronto"
                },
                Attendees = new List<EventAttendee>() {
                    new EventAttendee() { Email="sasori.pan.jerry@gmail.com" }
                }
            };
            
            service.Events.Insert(aNewEvent, "primary");
            //Console.WriteLine(aNewEvent.Summary+aNewEvent.Location);
            // Here is the end of Zhili (Jerry) Pan's code

            // Define parameters of request.
            EventsResource.ListRequest request = service.Events.List("primary");
            request.TimeMin = DateTime.Now;
            request.ShowDeleted = false;
            request.SingleEvents = true;
            request.MaxResults = 10;
            request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

            // List events.
            Events events = request.Execute();
            Console.WriteLine("Upcoming events:");
            if (events.Items != null && events.Items.Count > 0)
            {
                foreach (var eventItem in events.Items)
                {
                    string when = eventItem.Start.DateTime.ToString();
                    if (String.IsNullOrEmpty(when))
                    {
                        when = eventItem.Start.Date;
                    }
                    Console.WriteLine("{0} ({1}), {2}", eventItem.Summary, when, eventItem.Description);
                }
            }
            else
            {
                Console.WriteLine("No upcoming events found.");
            }
            Console.Read();

        }
    }
}