window.paletools = window.paletools || {};
window.paletools['paletools-min'] = "IWZ1bmN0aW9uKGUpe2NvbnN0IHQ9WyIiLCIiLCIiLCJDQU5DRUwiLCIiLCIiLCJIRUxQIiwiIiwiQkFDS19TUEFDRSIsIlRBQiIsIiIsIiIsIkNMRUFSIiwiRU5URVIiLCJFTlRFUl9TUEVDSUFMIiwiIiwiU0hJRlQiLCJDT05UUk9MIiwiQUxUIiwiUEFVU0UiLCJDQVBTX0xPQ0siLCJLQU5BIiwiRUlTVSIsIkpVTkpBIiwiRklOQUwiLCJIQU5KQSIsIiIsIkVTQ0FQRSIsIkNPTlZFUlQiLCJOT05DT05WRVJUIiwiQUNDRVBUIiwiTU9ERUNIQU5HRSIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTRUxFQ1QiLCJQUklOVCIsIkVYRUNVVEUiLCJQUklOVFNDUkVFTiIsIklOU0VSVCIsIkRFTEVURSIsIiIsIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCJDT0xPTiIsIlNFTUlDT0xPTiIsIkxFU1NfVEhBTiIsIkVRVUFMUyIsIkdSRUFURVJfVEhBTiIsIlFVRVNUSU9OX01BUksiLCJBVCIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiT1NfS0VZIiwiIiwiQ09OVEVYVF9NRU5VIiwiIiwiU0xFRVAiLCJOVU1QQUQwIiwiTlVNUEFEMSIsIk5VTVBBRDIiLCJOVU1QQUQzIiwiTlVNUEFENCIsIk5VTVBBRDUiLCJOVU1QQUQ2IiwiTlVNUEFENyIsIk5VTVBBRDgiLCJOVU1QQUQ5IiwiTVVMVElQTFkiLCJBREQiLCJTRVBBUkFUT1IiLCJTVUJUUkFDVCIsIkRFQ0lNQUwiLCJESVZJREUiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJGMTEiLCJGMTIiLCJGMTMiLCJGMTQiLCJGMTUiLCJGMTYiLCJGMTciLCJGMTgiLCJGMTkiLCJGMjAiLCJGMjEiLCJGMjIiLCJGMjMiLCJGMjQiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJOVU1fTE9DSyIsIlNDUk9MTF9MT0NLIiwiV0lOX09FTV9GSl9KSVNITyIsIldJTl9PRU1fRkpfTUFTU0hPVSIsIldJTl9PRU1fRkpfVE9VUk9LVSIsIldJTl9PRU1fRkpfTE9ZQSIsIldJTl9PRU1fRkpfUk9ZQSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIkNJUkNVTUZMRVgiLCJFWENMQU1BVElPTiIsIkRPVUJMRV9RVU9URSIsIkhBU0giLCJET0xMQVIiLCJQRVJDRU5UIiwiQU1QRVJTQU5EIiwiVU5ERVJTQ09SRSIsIk9QRU5fUEFSRU4iLCJDTE9TRV9QQVJFTiIsIkFTVEVSSVNLIiwiUExVUyIsIlBJUEUiLCJIWVBIRU5fTUlOVVMiLCJPUEVOX0NVUkxZX0JSQUNLRVQiLCJDTE9TRV9DVVJMWV9CUkFDS0VUIiwiVElMREUiLCIiLCIiLCIiLCIiLCJWT0xVTUVfTVVURSIsIlZPTFVNRV9ET1dOIiwiVk9MVU1FX1VQIiwiIiwiIiwiU0VNSUNPTE9OIiwiRVFVQUxTIiwiQ09NTUEiLCJNSU5VUyIsIlBFUklPRCIsIlNMQVNIIiwiQkFDS19RVU9URSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIk9QRU5fQlJBQ0tFVCIsIkJBQ0tfU0xBU0giLCJDTE9TRV9CUkFDS0VUIiwiUVVPVEUiLCIiLCJNRVRBIiwiQUxUR1IiLCIiLCJXSU5fSUNPX0hFTFAiLCJXSU5fSUNPXzAwIiwiIiwiV0lOX0lDT19DTEVBUiIsIiIsIiIsIldJTl9PRU1fUkVTRVQiLCJXSU5fT0VNX0pVTVAiLCJXSU5fT0VNX1BBMSIsIldJTl9PRU1fUEEyIiwiV0lOX09FTV9QQTMiLCJXSU5fT0VNX1dTQ1RSTCIsIldJTl9PRU1fQ1VTRUwiLCJXSU5fT0VNX0FUVE4iLCJXSU5fT0VNX0ZJTklTSCIsIldJTl9PRU1fQ09QWSIsIldJTl9PRU1fQVVUTyIsIldJTl9PRU1fRU5MVyIsIldJTl9PRU1fQkFDS1RBQiIsIkFUVE4iLCJDUlNFTCIsIkVYU0VMIiwiRVJFT0YiLCJQTEFZIiwiWk9PTSIsIiIsIlBBMSIsIldJTl9PRU1fQ0xFQVIiLCIiXTtsZXQgbj0hMCxvPW5ldyBEYXRlLGk9bnVsbCxhPW51bGw7ZT0kLmV4dGVuZCh7YmFjazo0OSxlbmFibGVEaXNhYmxlOjkyLHRlY2g6ODQsbGlzdHM6e3VwOjM4LGRvd246NDAscHJldjozNyxuZXh0OjM5fSxzZWFyY2g6e2RlY01pbkJpZDozNyxpbmNNaW5CaWQ6MzksZGVjTWF4QmlkOjM1LGluY01heEJpZDozNixkZWNNaW5CdXk6NDYsaW5jTWluQnV5OjM0LGRlY01heEJ1eTo0MCxpbmNNYXhCdXk6Mzgsc2VhcmNoOjUwfSxyZXN1bHRzOntiaWQ6NTIsYnV5OjUxLHRyYW5zZmVyOjgyLGNsdWI6NjcscHJlc3NFbnRlcjohMCxhdXRvQnV5OiExLHByZXZlbnRCYWNrOiEwLHNlbGw6ODEsZGVjQmlkOjQ2LGluY0JpZDozNH19LGV8fHt9KTtjb25zdCBsPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixzPWUscj13aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLGM9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgic2VhcmNoLmZpbHRlcnMucGxheWVycyIpLEE9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgiY2FyZC50aXRsZS5zcXVhZGZpdG5lc3MiKSxwPXdpbmRvdy5zZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoImNhcmQudGl0bGUuY29udHJhY3QiKSx1PShlLHQpPT57bGV0IG49bmV3IGwoZnVuY3Rpb24oZSxuKXsoZVswXS5hZGRlZE5vZGVzLmxlbmd0aHx8ZVswXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSYmdCgpfSk7cmV0dXJuIG4ub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLG59LGQ9KGUsdCk9PntpZigwPT1lLmxlbmd0aClyZXR1cm4hMTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KCJNb3VzZUV2ZW50cyIpO3JldHVybiBuLmluaXRFdmVudCh0KSxlWzBdLmRpc3BhdGNoRXZlbnQobiksITB9LEU9ZT0+KGU9PmQoZSwibW91c2Vkb3duIikpKGUpJiYoZT0+ZChlLCJtb3VzZXVwIikpKGUpLGg9KGUsdCk9PiQoIi5wbGF5ZXItc3RhdHMtZGF0YS1jb21wb25lbnQgLnZhbHVlIixlKVt0XS50ZXh0Q29udGVudCxiPXtvdnI6ZT0+JCgiLnJhdGluZyIsZSlbMF0udGV4dENvbnRlbnQscGFjOmU9PmgoZSwwKSxzaG86ZT0+aChlLDEpLHBhczplPT5oKGUsMiksZHJpOmU9PmgoZSwzKSxkZWY6ZT0+aChlLDQpLHBoeTplPT5oKGUsNSl9LE49JCgiLnV0LWZpZmEtaGVhZGVyLXZpZXciKSxNPWU9PntpZigwPT0oZT1lfHwkKCIuU2VhcmNoUmVzdWx0cyIpKS5sZW5ndGgpcmV0dXJuO2xldCB0PSQoIi5saXN0RlVUSXRlbSIsZSk7aWYoMD09dC5sZW5ndGh8fHQuZmlsdGVyKCdbcHJvY2Vzc2VkPSJ0cnVlIl0nKS5sZW5ndGg+MClyZXR1cm47bGV0IG49JCgiI3NxdWFkRml0bmVzcyIpLnZhbCgpLG89JCgiI2NvbnRyYWN0cyIpLnZhbCgpO3QuZWFjaCgoZSx0KT0+e2xldCBpPSQodCksYT0hMTtpZihpLmF0dHIoInByb2Nlc3NlZCIsInRydWUiKSwicGxheWVyIj09PVApaWYoMD09KGU9PiQoJCgiI2NhcmQtdHlwZSIpLnZhbCgpLGUpLmxlbmd0aCkodCkpYT0hMDtlbHNlIGZvcih2YXIgbCBpbiBiKXtsZXQgZT0kLnRyaW0oJChgI18ke2x9YCkudmFsKCkpO2lmKCFlKWNvbnRpbnVlO2xldCBuPXBhcnNlSW50KGUpLG89cGFyc2VJbnQoYltsXSh0KSk7aWYobjwwJiZvPk1hdGguYWJzKG4pP2E9ITA6IisiPT1lLmNoYXJBdCgwKSYmbzxuP2E9ITA6biE9byYmKGE9ITApLGEpYnJlYWt9ZWxzZSgiZml0bmVzcyI9PT1QJiYoZT0+JChgLm5hbWU6Y29udGFpbnMoJHtBfSlgLGUpLmxlbmd0aD4wPyQoIi5zdWJ0eXBlIixlKVswXS50ZXh0Q29udGVudDpudWxsKSh0KSE9bnx8ImNvbnRyYWN0cyI9PT1QJiYoZT0+JCgiLmNvbnRyYWN0cyIsZSkuaGFzQ2xhc3MoInJhcmUiKT8icmFyZSI6ImNvbW1vbiIpKHQpIT1vKSYmKGE9ITApO2kuYWRkQ2xhc3MoYT8iaGlkZSI6InNob3ciKX0pLCh0PSQoIi5saXN0RlVUSXRlbS5zaG93IixlKSkubGVuZ3RoPjAmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFKHQpfSwwKSxmaWx0ZXJMaXN0PSExfSx2PSgpPT57bGV0IGU9JCgiLmRpYWxvZy1ib2R5IC51dC1idXR0b24tZ3JvdXAgYnV0dG9uOmVxKDApIik7RShlKT9JKCk6c2V0VGltZW91dCh2LDEwKX0sbT0oKT0+e2xldCBlPSQoIi5TZWFyY2hSZXN1bHRzIik7MCE9ZS5sZW5ndGg/KGYoInNldCBpdGVtcyBmaWx0ZXIgLSBjb250YWluZXIgZm91bmQiKSxhJiZhLmRpc2Nvbm5lY3QoKSxNKGUpLGkmJmkuZGlzY29ubmVjdCgpLGk9dShlWzBdLCgpPT57TShlKX0pKTpmKCJzZXQgaXRlbXMgZmlsdGVyIC0gbm8gY29udGFpbmVyIil9LGc9KCk9PntuZXcgRGF0ZS1vPDUwMHx8KG89bmV3IERhdGUsRSgkKCIudXQtbmF2aWdhdGlvbi1idXR0b24tY29udHJvbCIpKXx8c2V0VGltZW91dChnLDEwKSl9LE89KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnNlbmRUcmFkZVBpbGUiKX0nKWApLFQ9KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnN0b3JlSW5DbHViIil9JylgKSxDPSgpPT4kKGAudXQtYnV0dG9uLWdyb3VwID4gYnV0dG9uOmNvbnRhaW5zKCcke3IubG9jYWxpemUoImluZm9wYW5lbC5sYWJlbC5kaXNjYXJkIil9JylgKSxCPSgpPT57dHJ5e2xldCBlPXt9O2lmKCQoIi51dC1tYXJrZXQtc2VhcmNoLWZpbHRlcnMtdmlldyIpLmxlbmd0aD4wKWVbcy5zZWFyY2guZGVjTWluQmlkXT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZSIpKSksZVtzLnNlYXJjaC5pbmNNaW5CaWRdPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlIikpKSxlW3Muc2VhcmNoLmRlY01heEJpZF09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWU6ZXEoMSkiKSkpLGVbcy5zZWFyY2guaW5jTWF4QmlkXT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZTplcSgxKSIpKSksZVtzLnNlYXJjaC5kZWNNaW5CdXldPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlOmVxKDIpIikpKSxlW3Muc2VhcmNoLmluY01pbkJ1eV09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWU6ZXEoMikiKSkpLGVbcy5zZWFyY2guZGVjTWF4QnV5XT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZTplcSgzKSIpKSksZVtzLnNlYXJjaC5pbmNNYXhCdXldPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlOmVxKDMpIikpKSxlW3Muc2VhcmNoLnNlYXJjaF09KCgpPT4oKCk9PntFKCQoIi5idXR0b24tY29udGFpbmVyIC5idG4tc3RhbmRhcmQuY2FsbC10by1hY3Rpb24iKSk7bGV0IGU9JCgiLnV0LW5hdmlnYXRpb24tY29udGFpbmVyLXZpZXctLWNvbnRlbnQiKTthPXUoZVswXSwoKT0+e20oKX0pfSkoKSk7ZWxzZXtsZXQgdD0kKCIubGlzdEZVVEl0ZW0uc2hvdyIpLG49dC5sZW5ndGg+MCxvPXQucGFyZW50cygiLnBhZ2luYXRlZCwgLnV0LXdhdGNoLWxpc3QtdmlldywgLnV0LXRyYW5zZmVyLWxpc3QtdmlldyIpO2lmKDA9PW8ubGVuZ3RoJiYobz10LnBhcmVudCgpKSxuJiYkKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIpLmxlbmd0aD4wJiYoZVtzLnJlc3VsdHMuYmlkXT0oKCk9PkUoJCgiLmJpZEJ1dHRvbiIpKSksZVtzLnJlc3VsdHMuYnV5XT0oKCk9PnZvaWQoRSgkKCIuYnV5QnV0dG9uIikpJiZzLnJlc3VsdHMucHJlc3NFbnRlciYmdigpKSksZVtzLnJlc3VsdHMuZGVjQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmRlY3JlbWVudC12YWx1ZSIpKSksZVtzLnJlc3VsdHMuaW5jQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmluY3JlbWVudC12YWx1ZSIpKSkpLG4mJiQoIi5EZXRhaWxQYW5lbCA+IC51dC1idXR0b24tZ3JvdXAiKS5sZW5ndGg+MCYmKGVbcy5yZXN1bHRzLnRyYW5zZmVyXT0oKCk9PkUoTygpKSksZVtzLnJlc3VsdHMuY2x1Yl09KCgpPT5FKFQoKSkpLGVbcy5yZXN1bHRzLnNlbGxdPSgoKT0+RShDKCkpKSksbil7bGV0IHQ9JCgiLmxpc3RGVVRJdGVtLnNlbGVjdGVkIixvKTtlW3MubGlzdHMudXBdPSgoKT0+e2xldCBlPXQucHJldigpO2Zvcig7MT09ZS5sZW5ndGgmJiFlLmhhc0NsYXNzKCJzaG93Iik7KWU9ZS5wcmV2KCk7MCE9ZS5sZW5ndGgmJihFKGUpLG8uY3NzKCJwb3NpdGlvbiIsInJlbGF0aXZlIikuc2Nyb2xsVG9wKG8uc2Nyb2xsVG9wKCkrZS5wb3NpdGlvbigpLnRvcC1lLmhlaWdodCgpKSl9KSxlW3MubGlzdHMuZG93bl09KCgpPT57bGV0IGU9dC5uZXh0KCk7Zm9yKDsxPT1lLmxlbmd0aCYmIWUuaGFzQ2xhc3MoInNob3ciKTspZT1lLm5leHQoKTswIT1lLmxlbmd0aCYmKEUoZSksby5jc3MoInBvc2l0aW9uIiwicmVsYXRpdmUiKS5zY3JvbGxUb3Aoby5zY3JvbGxUb3AoKStlLnBvc2l0aW9uKCkudG9wLWUuaGVpZ2h0KCkpKX0pfSQoIi5wYWdpbmdDb250YWluZXIiKS5sZW5ndGg+MCYmKGVbcy5saXN0cy5wcmV2XT0oKCk9PkUoJCgiLnBhZ2luZ0NvbnRhaW5lciAucHJldjp2aXNpYmxlIikpKSxlW3MubGlzdHMubmV4dF09KCgpPT5FKCQoIi5wYWdpbmdDb250YWluZXIgLm5leHQ6dmlzaWJsZSIpKSkpfXJldHVybiBlfWNhdGNoKGUpe2YoZSl9fSxJPSgpPT57dmFyIGU9TygpO2lmKDA9PWUubGVuZ3RoKXJldHVybiB2b2lkIHNldFRpbWVvdXQoSSw1MCk7bGV0IG49KGUsbik9PntpZighZSlyZXR1cm47bGV0IG89YCBbICR7dFtzLnJlc3VsdHNbbl1dfSBdYCxpPWUuaHRtbCgpO2kmJi0xPT1pLmluZGV4T2YobykmJmUuaHRtbChlLmh0bWwoKStvKX07bihlLCJ0cmFuc2ZlciIpLG4oVCgpLCJjbHViIiksbihDKCksInNlbGwiKX0sZj1lPT57JCgiI2xvZyIpLnZhbChgJHtuZXcgRGF0ZX06ICR7ZX1cbiR7JCgiI2xvZyIpLnZhbCgpfWApfTtOLmFwcGVuZCgiPHRleHRhcmVhIGlkPSdsb2cnIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDAwJyByb3dzPScxMCcgY29scz0nMjAwJz48L3RleHRhcmVhPiIpO2xldCBQPSJwbGF5ZXIiOyQoYDxzZWxlY3Qgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJwbGF5ZXIiPiR7Y308L29wdGlvbj48b3B0aW9uIHZhbHVlPSJmaXRuZXNzIj4ke0F9PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29udHJhY3RzIj4ke3B9PC9vcHRpb24+PC9zZWxlY3Q+YCkuY2hhbmdlKGZ1bmN0aW9uKCl7UD10aGlzLnZhbHVlLEwuaGlkZSgpLFMuaGlkZSgpLEYuaGlkZSgpLCJwbGF5ZXIiPT10aGlzLnZhbHVlP0wuc2hvdygpOiJmaXRuZXNzIj09PXRoaXMudmFsdWU/Uy5zaG93KCk6ImNvbnRyYWN0cyI9PT10aGlzLnZhbHVlJiZGLnNob3coKX0pLmFwcGVuZFRvKE4pO2xldCBMPSQoIjxkaXYgLz4iKS5jc3MoImRpc3BsYXkiLCJpbmxpbmUtYmxvY2siKS5hcHBlbmRUbyhOKTtmb3IodmFyIFIgaW4gYikkKCI8aW5wdXQgLz4iKS5hdHRyKCJpZCIsYF8ke1J9YCkuYXR0cigidHlwZSIsInRleHQiKS5hdHRyKCJzdHlsZSIsIndpZHRoOjUycHgiKS5hZGRDbGFzcygicGxheWVyYXR0ciIpLmF0dHIoInBsYWNlaG9sZGVyIixSLnRvVXBwZXJDYXNlKCkpLmFwcGVuZFRvKEwpOyQoJzxzZWxlY3QgaWQ9ImNhcmQtdHlwZSIgc3R5bGU9ImhlaWdodDo0NnB4Ij5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5pdGVtIj48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb246bm90KC5jaGFtcGlvbnMpIj5Db21tb248L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5yYXJlOm5vdCguY2hhbXBpb25zKSI+UmFyZTwvb3B0aW9ucz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb24uY2hhbXBpb25zIj5VQ0wgQ29tbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIucmFyZS5jaGFtcGlvbnMiPlVDTCBSYXJlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTUsIDIyNiwgMTQwKTsiXVwnPkdvbGQgSUY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCcuc3BlY2lhbHMgLnBsYXllck92ZXJ2aWV3W3N0eWxlPSJjb2xvcjogcmdiKDI0MiwgMjQyLCAyNDMpOyJdXCc+U2lsdmVyIElGPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTIsIDg0LCA5Nyk7Il1cJz5PVFc8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgJykuYXBwZW5kVG8oTCk7bGV0IFM9JCgnPHNlbGVjdCBpZD0ic3F1YWRGaXRuZXNzIiBzdHlsZT0iaGVpZ2h0OjQ2cHgiPjxvcHRpb24gdmFsdWU9IiszMCI+KzMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iKzIwIj4rMjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPSIrMTAiPisxMDwvb3B0aW9uPjwvc2VsZWN0PicpLmFwcGVuZFRvKE4pLmhpZGUoKSxGPSQoJzxzZWxlY3QgaWQ9ImNvbnRyYWN0cyIgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJyYXJlIj5SYXJlPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29tbW9uIj5Db21tb248L29wdGlvbj48L3NlbGVjdD4nKS5hcHBlbmRUbyhOKS5oaWRlKCk7JC5lYWNoKFskKCIjc3F1YWRGaXRuZXNzIiksJCgiI2NvbnRyYWN0cyIpLCQoIiNjYXJkLXR5cGUiKSwkKCIucGxheWVyYXR0ciIpXSxmdW5jdGlvbigpeyQodGhpcykuY2hhbmdlKCgpPT4oJCgiLmxpc3RGVVRJdGVtIikucmVtb3ZlQ2xhc3MoImhpZGUiKS5yZW1vdmVBdHRyKCJwcm9jZXNzZWQiKSxmKCJyZWZpbHRlcmluZyBpdGVtcyIpLHZvaWQgTSgpKSl9KSwoKCk9PntsZXQgZT0oZSxuLG8saSk9PmAke2V9IC4ke2k/ImluIjoiZGUifWNyZW1lbnQtdmFsdWU6YWZ0ZXIgeyBmb250LXNpemU6MTBweDsgZGlzcGxheTpibG9jazsgbWFyZ2luLXRvcDotMzBweDsgY29udGVudDogJ1sgJHt0W3Nbbl1bb11dfSBdJyB9YCxuPSh0LG4sbyk9PmUoYC5zZWFyY2gtcHJpY2VzIC5wcmljZS1maWx0ZXI6bnRoLWNoaWxkKCR7dH0pYCwic2VhcmNoIixuLG8pLG89KGUsdCxvKT0+YCR7bihlLHQpfSR7bihlLG8sITApfWAsaT1gXG4gICAgICAgICAgICAke28oMiwiZGVjTWluQmlkIiwiaW5jTWluQmlkIil9XG4gICAgICAgICAgICAke28oMywiZGVjTWF4QmlkIiwiaW5jTWF4QmlkIil9XG4gICAgICAgICAgICAke28oNSwiZGVjTWluQnV5IiwiaW5jTWluQnV5Iil9XG4gICAgICAgICAgICAke28oNiwiZGVjTWF4QnV5IiwiaW5jTWF4QnV5Iil9XG4gICAgICAgICAgICAke2UoIi5EZXRhaWxQYW5lbCA+IC5iaWRPcHRpb25zIiwicmVzdWx0cyIsImRlY0JpZCIsITEpfVxuICAgICAgICAgICAgJHtlKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIsInJlc3VsdHMiLCJpbmNCaWQiLCEwKX1cbiAgICAgICAgICAgIC51dC1tYXJrZXQtc2VhcmNoLWZpbHRlcnMtdmlldyAuY2FsbC10by1hY3Rpb246YWZ0ZXIgeyBjb250ZW50OiAnWyAke3Rbcy5zZWFyY2guc2VhcmNoXX0gXScgfVxuICAgICAgICAgICAgLnV0LW5hdmlnYXRpb24tYnV0dG9uLWNvbnRyb2w6YWZ0ZXIgeyBmb250LXNpemU6MTBweDsgZmxvYXQ6cmlnaHQ7IG1hcmdpbi1yaWdodDoxMnB4OyBjb250ZW50OiAnWyAke3Rbcy5iYWNrXX0gXScgfVxuICAgICAgICAgICAgLnBhZ2luZ0NvbnRhaW5lciAucHJldjphZnRlciB7IGZvbnQtc2l6ZTogMTBweDsgZGlzcGxheTpibG9jazsgY29udGVudDogJ1sgJHt0W3MubGlzdHMucHJldl19IF0nIH1cbiAgICAgICAgICAgIC5wYWdpbmdDb250YWluZXIgLm5leHQ6YWZ0ZXIgeyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6YmxvY2s7IGNvbnRlbnQ6ICdbICR7dFtzLmxpc3RzLm5leHRdfSBdJyB9XG4gICAgICAgICAgICAuYmlkQnV0dG9uOmFmdGVyIHsgY29udGVudDogJyBbICR7dFtzLnJlc3VsdHMuYmlkXX0gXScgfVxuICAgICAgICAgICAgLmJ1eUJ1dHRvbjpiZWZvcmUgeyBmbG9hdDpyaWdodDsgbWFyZ2luLWxlZnQ6IC00MHB4OyBjb250ZW50OiAnIFsgJHt0W3MucmVzdWx0cy5idXldfSBdJyB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24taG9tZSB7IG9yZGVyOiAwIH1cbiAgICAgICAgICAgIGJ1dHRvbi51dC10YWItYmFyLWl0ZW0uaWNvbi1zcXVhZCB7IG9yZGVyOiAwIH1cbiAgICAgICAgICAgIGJ1dHRvbi51dC10YWItYmFyLWl0ZW0uaWNvbi1zYmMgeyBvcmRlcjogMSB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tdHJhbnNmZXIgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc3RvcmUgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tY2x1YiB7IG9yZGVyOiAyIH1cbiAgICAgICAgICAgIC5oaWRlIHsgZGlzcGxheTogbm9uZSB9XG4gICAgICAgICAgICBgO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInN0eWxlIik7YS50eXBlPSJ0ZXh0L2NzcyIsYS5pbm5lclRleHQ9aSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGEpfSkoKSxkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoImtleWRvd24iLGU9PntpZihlLmtleUNvZGU9PXMuZW5hYmxlRGlzYWJsZSYmKG49IW4sJCgiI3BhbGV0b29scy1zdGF0dXMiKS5jc3MoImNvbG9yIixuPyJsaW1lIjoicmVkIikudGV4dChuPyJPTiI6Ik9GRiIpKSxuKWlmKGUua2V5Q29kZSE9cy5iYWNrKWlmKGUua2V5Q29kZSE9cy50ZWNoKXRyeXtsZXQgdD1CKClbZS5rZXlDb2RlXTt0JiZ0KCl9Y2F0Y2goZSl7ZihlKX1lbHNlKCgpPT57bGV0IGU9JCgiLnBhbmVsQWN0aW9ucyAucGFuZWxBY3Rpb25Sb3cuYm91Z2h0UHJpY2UiKTtpZigwPT1lLmxlbmd0aClyZXR1cm47bGV0IHQ9JCgiI3RlY2gtY29pbnMiKTswPT10Lmxlbmd0aCYmKCQoJzxkaXYgY2xhc3M9InBhbmVsQWN0aW9uUm93IGJvdWdodFByaWNlIj48c3Bhbj5UZWNoPC9zcGFuPjxzcGFuIGlkPSJ0ZWNoLWNvaW5zIj48L3NwYW4+PC9kaXY+JykuaW5zZXJ0QWZ0ZXIoZSksdD0kKCIjdGVjaC1jb2lucyIpKTtsZXQgbj1wYXJzZUludCgkKCIuRGV0YWlsUGFuZWwgLmJvdWdodFByaWNlVmFsdWUiKS50ZXh0KCkucmVwbGFjZSgiLCIsIiIpLnJlcGxhY2UoIi4iLCIiKSksbz1uKzFlMyooTWF0aC5mbG9vcihuLzFlNCktMSkrMzUwMDt0LnRleHQobyl9KSgpO2Vsc2UgZygpfSk7bGV0IFU9ZT0+JCgibmF2LnV0LXRhYi1iYXIiKS5hcHBlbmQoYDxidXR0b24gY2xhc3M9InV0LXRhYi1iYXItaXRlbSIgc3R5bGU9Im9yZGVyOjMiPiR7ZX08L2J1dHRvbj5gKSx5PShlLHQsbixvKT0+VShgPGEgc3R5bGU9InRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiR7b3x8ImluaGVyaXQifTtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6aGFuZCIgdGFyZ2V0PSIke3R9IiBocmVmPSIke2V9Ij4ke259PC9hPmApO3koImh0dHA6Ly9lYWxsZWdyZXR0YS5naXRodWIuaW8vcGFsZXRvb2xzLyIsInBhbGV0b29scyIsJ1BhbGV0b29scyB2Mi4wLjcgPHNwYW4gaWQ9InBhbGV0b29scy1zdGF0dXMiIHN0eWxlPSJjb2xvcjpsaW1lIj5PTjwvc3Bhbj4nKSx5KCJodHRwczovL3R3aXR0ZXIuY29tL0ZGVkEiLCJ0d2l0dGVyIiwiQEZGVkEiLCIjMDA5OUZGO2ZvbnQtd2VpZ2h0OmJvbGQiKSxVKCc8Zm9ybSBpZD0icGFsZXRvb2xzLWRvbmF0ZSIgYWN0aW9uPSJodHRwczovL3d3dy5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyIiBtZXRob2Q9InBvc3QiIHRhcmdldD0iX2JsYW5rIj5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJjbWQiIHZhbHVlPSJfZG9uYXRpb25zIiAvPlxuICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImJ1c2luZXNzIiB2YWx1ZT0iWkFKWDZBRDZYUExSTiIgLz5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJjdXJyZW5jeV9jb2RlIiB2YWx1ZT0iVVNEIiAvPlxuICAgIDxhIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0IiBvbmNsaWNrPSJqYXZhc2NyaXB0OiQoXCcjcGFsZXRvb2xzLWRvbmF0ZVwnKVswXS5zdWJtaXQoKSIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5QYWxldG9vbHMgRG9uYXRlPC9hPjwvZm9ybT48L2E+JykseSgiaHR0cHM6Ly93d3cuaWVzYS1nbG9iYWwuY29tIiwiaWVzYSIsJzxpbWcgc3JjPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC80UUJtUlhocFpnQUFUVTBBS2dBQUFBZ0FCQUVhQUFVQUFBQUJBQUFBUGdFYkFBVUFBQUFCQUFBQVJnRW9BQU1BQUFBQkFBSUFBQUV4QUFJQUFBQVFBQUFBVGdBQUFBQUFBQUJnQUFBQUFRQUFBR0FBQUFBQmNHRnBiblF1Ym1WMElEUXVNaTR4QVAvYkFFTUFFQXNNRGd3S0VBNE5EaElSRUJNWUtCb1lGaFlZTVNNbEhTZzZNejA4T1RNNE4wQklYRTVBUkZkRk56aFFiVkZYWDJKbmFHYytUWEY1Y0dSNFhHVm5ZLy9iQUVNQkVSSVNHQlVZTHhvYUwyTkNPRUpqWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkvL0FBQkVJQUVJQVFBTUJJZ0FDRVFFREVRSC94QUFmQUFBQkJRRUJBUUVCQVFBQUFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFQUFDQVFNREFnUURCUVVFQkFBQUFYMEJBZ01BQkJFRkVpRXhRUVlUVVdFSEluRVVNb0dSb1FnalFySEJGVkxSOENRelluS0NDUW9XRnhnWkdpVW1KeWdwS2pRMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvT0VoWWFIaUltS2twT1VsWmFYbUptYW9xT2twYWFucUttcXNyTzB0YmEzdUxtNndzUEV4Y2JIeU1uSzB0UFUxZGJYMk5uYTRlTGo1T1htNStqcDZ2SHk4L1QxOXZmNCtmci94QUFmQVFBREFRRUJBUUVCQVFFQkFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFUUFDQVFJRUJBTUVCd1VFQkFBQkFuY0FBUUlERVFRRklURUdFa0ZSQjJGeEV5SXlnUWdVUXBHaHNjRUpJek5TOEJWaWN0RUtGaVEwNFNYeEZ4Z1pHaVluS0NrcU5UWTNPRGs2UTBSRlJrZElTVXBUVkZWV1YxaFpXbU5rWldabmFHbHFjM1IxZG5kNGVYcUNnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmk0K1RsNXVmbzZlcnk4L1QxOXZmNCtmci8yZ0FNQXdFQUFoRURFUUEvQU9icWUyc3JxNy80OTdlV1gzUlNhMnRBdHJWTk9hK2xzL3Rkd2JnUVF4c2NMa2dIbXVvajAzVTdsQUx1L3dEc3NmOEF6eHMxQzRIcHVQTlZjUnlFZW1KcFVQMnJXWVczRTRodHQyRElmVWtkQUtzV25pKzR0VTJMWTJnVFBBUlN1UGF0dzZQYmFqclZ3bDYwc2tWbkZHaUt6OVFRU1NUNjF4S3BiSnFJU1IyZTFXWEJkZXBYUFg4cUFOS0hVSXRXdUJiNmxieDdwbTJwUEVvVmtKNlo5Ujlhclh1aGFqWlN1cjJzcklwT0pFVWxTUFd0dnhWRnBGdmF3UHB3aFc1M3JneE55RkE2a0Q4T2ExZEtXKzFmU3JhOVhVSllMZ0FxY0tDajRKNUsrdElEejdwUlhkM05tYnU1RmpyRm5DWnBVWm9idTMrVXNRTzRyaEtZanN2RGxwY2YyVFprd1BqN2VKZVYvZzIvZStsYitxMzExYXoyeVc4RHlJelpsWUlXMnJrRHQzNXorRllGOWQzTU9yNkpERlBJa1R3eGJrVmlBZWU0clBzWTljMVdlNSt5WDhvRVQ0SWFaaDFKeGo4cVF6V0YzcU1pdExOcDZ0SVNWTC9aU1daY2NMalBROC9sNzFYbCsxS3JtUFNZSFlPNEMvWWlQbEE0T2Y2VkxaYVA0aml2WUpKNzR0RXJndXZuc2NqUFBGVldqMW5WZGMxQ0t6djNpU0NRam1VcUFNa0FBRDZVQVhUYlRKS3dleXRXVlpWVEsyUFVFWkovRHBUN1BVdFZ0N2VOVHAvbHFIWEtSd0VBSmpMWTk4bitkVnY3QThTZjlCYi9BTWp2L2hRZEE4U1kvd0NRcm4vdHUvOEFoUUJ1NmlSL2JHbG4vcnIvQU9nVjVnZXBycjlKMW03dHRSYlM5YWJMY29rcmpKUmlNRG51RG5yWE02all6YWJleVdzNCtaRHdlekRzUlRRSFJhbi9BTWgzUWY4QXJqRC9BT2hWbmFiWVJYdHhkK1pxYTJSV1RnTWNidVQ3aXRTTFVORXZwdE91TG1lNGl1YmRFUUtCOHVRZTV4MHpUOVIwclFCTFBQY1NYVnRpWW82THlBM1gwUEJISXBBTXR0R3RvTG1LWStJWW1FYmh0dTRjNFBUNzFMZWFMWjNOOWNYS2E3Qkg1emw5b0k0eWY5Nm9QN0w4TS9aZnRQMjY3OHJmNWU3SDhXTTQrNzZVVGFYNFpnU0o1TDY3Q3pKdlRqcU1rZjNmYWdDaHJGaW1uUlJ2QnF5M1RPMkNxTjBIcjFOWDdHNDh2eFZZdE5Oc2pGdWhZczJCL3FxbmkwYnc0dXFMWm01dVpKdzJERTNRbnJqSUg5YVM2dDlCMXJVdDhlb1NvN3FBRVdJZ0FLUGNjREFvQXRlTGJXeTFHMSsxVzl6QWJtRWRCSU11dnA5YXpJV0hpVFNQczdrZjJsWnJtTmovQU10VTlQci9BSjlhTGpSZEN0VWhhYlU1MUV5YjAvZDhsZlhwUkJkNk5vaVRUNmZjVFhWMjZGRTNMdENaNzlLQU9hcnV2c2RycVdrVzl4TGV4b2swQWlsWitNdXYzVDlRY2ozRmNMV3hvZXN4YWVra0YzYi9BR20zWTdsVCs2Mk1aSDRHbUJyL0FQQ1B3ZjJPYlgrMWJiaWZ6Uy9iN3VNZGFMM1FJTGxMU0grMXJaWHQ0L0tJUFVuY2ZmM3hXaFpYK21haGFFV0ZsRTgzOFZzN0JHeHowN0hxZnpwLzJ2UzBJRnpwYzhNd1AzR2dMWlBzUndlbElDdU5IaFh4Q2RTT3BXK041YnkrL3dCMCsvc2Z5cXZwbmh5M2pkNDExS0NXU1g1U0U2N1A0Z09lcDZaOU0xb2g3SWxyaTYweGJXMkhQbTNEQldKOWw1T2F4ci94TFlMRk1tbTJSam1JS3BOMHdEd1QrVkFHUjRrblM0MXU0TVQ3b2tJUk9NQUFER0I3Vm1VVVV4QlJSUlFBQWxTQ0NRUjBJcnQvRDExY1NhVE0wazhyc3E4Rm5KSW9vb1kwY2pmenpUM1RHYVY1Q0RnRjJKeCtkVnFLS0JCUlJSUUIvOWs9IiBhbHQ9IiIgLz4nKX0oKTs=";