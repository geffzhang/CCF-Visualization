﻿using System.Diagnostics;
using System;
namespace dataprocess
{
    class Program
    {
        static void Main(string[] args)
        {
            var IsTraffic = true;
            if (IsTraffic)
            {
                if (!System.IO.Directory.Exists(@"F:\CCF-Visualization\RawData\"))
                {
                    DataCenterForTraffic.DataFolder = DataCenterForTraffic.DataFolder.Replace("F:",@"D:\share\CPU Test" );
                    DataCenterForTraffic.EDAFile = DataCenterForTraffic.EDAFile.Replace("F:",@"D:\share\CPU Test" );
                    DataCenterForTraffic.AfterProcessFolder = DataCenterForTraffic.AfterProcessFolder.Replace("F:",@"D:\share\CPU Test" );
                    DataCenterForTraffic.AngularJsonAssetsFolder = DataCenterForTraffic.AngularJsonAssetsFolder.Replace("F:",@"D:\share\CPU Test" );
                }

                DataCenterForTraffic.Load(-1);
                DataCenterForTraffic.GetEveryGeoPointAttr();
                //DataCenterForTraffic.Load(2_000_000);
                //相同起点和终点的分析(耗时)
                //DataCenterForTraffic.IsCreateTrace = true;
                //DataCenterForTraffic.IsCreate24HoursGeoJson = true;
                //DataCenterForTraffic.IsCreateWeekNoGeoJson = true;
                //DataCenterForTraffic.IsCreateGeoJson = true;
                //DataCenterForTraffic.EDA();
            }
            else
            {
                DataCenterForSecurity.Load(-1);
                //DataCenterForSecurity.Load(1_000_000);
                //DataCenterForSecurity.Load(100_000);
                //DataCenterForSecurity.GetProtocolProfile("ftp_control");
                //DataCenterForSecurity.GetProtocolProfile("ssl");
                //DataCenterForSecurity.GetProtocolProfile("http");
                //DataCenterForSecurity.GetProtocolProfile("http_proxy");
                //DataCenterForSecurity.Protocol_Port();

                //DataCenterForSecurity.CreateSourceIpTreeJson();
                //DataCenterForSecurity.CreateDistIpTreeJson();
                //DataCenterForSecurity.CommunicationMode();
                //DataCenterForSecurity.EDA();
            }
        }
    }
}
