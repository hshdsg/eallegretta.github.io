window.paletools = window.paletools || {};
window.paletools['club-analyzer-min'] = "IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImlmcmFtZSIpO2Uuc3R5bGUuZGlzcGxheT0ibm9uZSIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSx3aW5kb3cuY29uc29sZT1lLmNvbnRlbnRXaW5kb3cuY29uc29sZSx3aW5kb3cuY29udHJvbGxlckluc3RhbmNlPW51bGwsd2luZG93LlVUQ2x1YkFuYWx5emVyVmlld0NvbnRyb2xsZXI9ZnVuY3Rpb24oKXtVVFZpZXdDb250cm9sbGVyLmNhbGwodGhpcyksd2luZG93LmNvbnRyb2xsZXJJbnN0YW5jZT10aGlzLHRoaXMuX2pzQ2xhc3NOYW1lPSJVVENsdWJBbmFseXplclZpZXdDb250cm9sbGVyIn0sSlNVdGlscy5pbmhlcml0cyhVVENsdWJBbmFseXplclZpZXdDb250cm9sbGVyLFVUVmlld0NvbnRyb2xsZXIpO2xldCBhPXtsZWdlbmRzOnt9LHBsYXllcnM6e319LHQ9bnVsbDtVVEl0ZW1UYWJsZUNlbGxWaWV3LnByb3RvdHlwZS5fb2xkUmVuZGVyTmFtZT1VVEl0ZW1UYWJsZUNlbGxWaWV3LnByb3RvdHlwZS5yZW5kZXJOYW1lLFVUSXRlbVRhYmxlQ2VsbFZpZXcucHJvdG90eXBlLnJlbmRlck5hbWU9ZnVuY3Rpb24oKXt0aGlzLl9vbGRSZW5kZXJOYW1lKCksdGhpcy5kYXRhLmlzUGxheWVyKCkmJnQuYWxsJiZ0LmFsbFt0aGlzLmRhdGEucmVzb3VyY2VJZF0mJnRoaXMuX19lbnRpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgiY2x1Yi1hbmFseXplci1leGlzdHMiKX07d2luZG93LnNlcnZpY2VzLkF1dGhlbnRpY2F0aW9uLmhvc3RuYW1lO2NvbnN0IG49ZT0+d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZShgZ2xvYmFsLnRlYW1hYmJyMTUuJHt3aW5kb3cuQVBQX1lFQVJ9LnRlYW0ke2V9YCksbD1lPT53aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLmxvY2FsaXplKGBnbG9iYWwubGVhZ3VlRnVsbC4ke3dpbmRvdy5BUFBfWUVBUn0ubGVhZ3VlJHtlfWApLGk9ZT0+d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZShgc2VhcmNoLm5hdGlvbk5hbWUubmF0aW9uJHtlfWApLHI9ZT0+d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZShgaXRlbS5yYXJldHlwZSR7ZX1gKSxvPSgpPT57bGV0IGU9W107cmV0dXJuIG5ldyBQcm9taXNlKHQ9PntmZXRjaCgiaHR0cHM6Ly93d3cuZWEuY29tL2ZpZmEvdWx0aW1hdGUtdGVhbS93ZWItYXBwL2NvbnRlbnQvMjFENEYxQUMtOTFBMy00NThELUE2NEUtODk1QUE2RDg3MUQxLzIwMjEvZnV0L2l0ZW1zL3dlYi9wbGF5ZXJzLmpzb24/Xz0iKyhuZXcgRGF0ZSkudmFsdWVPZigpKS50aGVuKGU9PmUuanNvbigpKS50aGVuKGU9Pntmb3IobGV0IHQgb2YgZS5MZWdlbmRzUGxheWVycylhLmxlZ2VuZHNbdC5pZF09e2Y6dC5mLGw6dC5sLHI6dC5yfTtmb3IobGV0IHQgb2YgZS5QbGF5ZXJzKWEucGxheWVyc1t0LmlkXT17Zjp0LmYsbDp0Lmwscjp0LnJ9fSkuY2F0Y2goKCk9Pnt9KSxmdW5jdGlvbiBhKHQsbil7cmV0dXJuIGZldGNoKGAke3dpbmRvdy5zZXJ2aWNlcy5BdXRoZW50aWNhdGlvbi5zZXNzaW9uVXRhcy51cmx9L3V0L2dhbWUvZmlmYTIxL2NsdWJgLHttZXRob2Q6IlBPU1QiLGhlYWRlcnM6eyJYLVVULVNJRCI6c2VydmljZXMuQXV0aGVudGljYXRpb24uZ2V0VXRhc1Nlc3Npb24oKS5pZCwiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vanNvbiJ9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe2NvdW50OjkxLHNvcnQ6ImRlc2MiLHNvcnRCeToidmFsdWUiLHN0YXJ0OnQsdHlwZToicGxheWVyIn0pfSkudGhlbihlPT5lLmpzb24oKSkudGhlbihsPT57ZT1lLmNvbmNhdChsLml0ZW1EYXRhKSxsLml0ZW1EYXRhLmxlbmd0aDw5MT9uKGUpOmEodCs5MSxuKX0pfSgwLHQpfSl9O3dpbmRvdy5VVENsdWJBbmFseXplclZpZXdDb250cm9sbGVyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dGhpcy5pbml0aWFsaXplZHx8KCgoKT0+bygpLnRoZW4oZT0+e2NvbnN0IHQ9e2FsbDp7fSxieU5hdGlvbjp7fSxieUxlYWd1ZTp7fSxieVJhdGluZzp7fSxieVJhcml0eTp7fX07Zm9yKGxldCBvIG9mIGUpe3QuYWxsW28ucmVzb3VyY2VJZF09byxhLmxlZ2VuZHNbby5hc3NldElkXT9vLmRhdGE9YS5sZWdlbmRzW28uYXNzZXRJZF06YS5wbGF5ZXJzW28uYXNzZXRJZF0mJihvLmRhdGE9YS5wbGF5ZXJzW28uYXNzZXRJZF0pO2NvbnN0IGU9cihvLnJhcmVmbGFnKTt0LmJ5UmFyaXR5W2VdPXQuYnlSYXJpdHlbZV18fFtdLHQuYnlSYXJpdHlbZV0ucHVzaChvKSx0LmJ5UmF0aW5nW28ucmF0aW5nXT10LmJ5UmF0aW5nW28ucmF0aW5nXXx8e3BsYXllcnM6W10sYnlSYXJpdHk6e319LHQuYnlSYXRpbmdbby5yYXRpbmddLmJ5UmFyaXR5W2VdPXQuYnlSYXRpbmdbby5yYXRpbmddLmJ5UmFyaXR5W2VdfHxbXSx0LmJ5UmF0aW5nW28ucmF0aW5nXS5wbGF5ZXJzLnB1c2gobyksdC5ieVJhdGluZ1tvLnJhdGluZ10uYnlSYXJpdHlbZV0ucHVzaChvKTtjb25zdCBzPWkoby5uYXRpb24pO3QuYnlOYXRpb25bc109dC5ieU5hdGlvbltzXXx8e3BsYXllcnM6W10sYnlSYXJpdHk6e319LHQuYnlOYXRpb25bc10uYnlSYXJpdHlbZV09dC5ieU5hdGlvbltzXS5ieVJhcml0eVtlXXx8W10sdC5ieU5hdGlvbltzXS5wbGF5ZXJzLnB1c2gobyksdC5ieU5hdGlvbltzXS5ieVJhcml0eVtlXS5wdXNoKG8pO2NvbnN0IHk9bChvLmxlYWd1ZUlkKSxjPW4oby50ZWFtaWQpO3QuYnlMZWFndWVbeV09dC5ieUxlYWd1ZVt5XXx8e3BsYXllcnM6W10sYnlUZWFtOnt9fSx0LmJ5TGVhZ3VlW3ldLmJ5VGVhbVtjXT10LmJ5TGVhZ3VlW3ldLmJ5VGVhbVtjXXx8e3BsYXllcnM6W10sYnlSYXJpdHk6e319LHQuYnlMZWFndWVbeV0uYnlUZWFtW2NdLmJ5UmFyaXR5W2VdPXQuYnlMZWFndWVbeV0uYnlUZWFtW2NdLmJ5UmFyaXR5W2VdfHxbXSx0LmJ5TGVhZ3VlW3ldLnBsYXllcnMucHVzaChvKSx0LmJ5TGVhZ3VlW3ldLmJ5VGVhbVtjXS5wbGF5ZXJzLnB1c2gobyksdC5ieUxlYWd1ZVt5XS5ieVRlYW1bY10uYnlSYXJpdHlbZV0ucHVzaChvKX1yZXR1cm4gdH0pKSgpLnRoZW4oZT0+e2NvbnNvbGUubG9nKGUpLHQ9ZX0pLGpRdWVyeShkb2N1bWVudC5ib2R5KS5hcHBlbmQoJ1xuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgLmNsdWItYW5hbHl6ZXItZXhpc3RzIC5wbGF5ZXI6YWZ0ZXIgeyBcbiAgICAgICAgICAgICAgICBjb250ZW50OiAiXFxFMDA5IjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVWx0aW1hdGVUZWFtLUljb25zLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMGZmMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIDwvc3R5bGU+JykpfTtsZXQgcz0hMTshZnVuY3Rpb24gZSgpe2lmKHNlcnZpY2VzLkxvY2FsaXphdGlvbiYmalF1ZXJ5KCJoMS50aXRsZSIpLmh0bWwoKT09PXNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgibmF2YmFyLmxhYmVsLmhvbWUiKSYmKHM9ITApLHMmJm51bGwhPXQmJmdldEFwcE1haW4oKS5nZXRSb290Vmlld0NvbnRyb2xsZXIoKS5nZXRQcmVzZW50ZWRWaWV3Q29udHJvbGxlcigpLmdldEN1cnJlbnRWaWV3Q29udHJvbGxlcigpLmdldEN1cnJlbnRDb250cm9sbGVyKCkuX2pzQ2xhc3NOYW1lKXt2YXIgYT1nZXRBcHBNYWluKCkuZ2V0Um9vdFZpZXdDb250cm9sbGVyKCkuZ2V0UHJlc2VudGVkVmlld0NvbnRyb2xsZXIoKS5nZXRDdXJyZW50Vmlld0NvbnRyb2xsZXIoKS5nZXRDdXJyZW50Q29udHJvbGxlcigpLl92aWV3O2pRdWVyeShhLl9fcm9vdC5wYXJlbnRFbGVtZW50KS5wcmVwZW5kKCdcbiAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgLmhpZGUgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgICAgICAgICAgLmNsdWItYW5hbHl6ZXIgeyBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgICAgICAgICAgICAgICAuY2x1Yi1hbmFseXplciAuaW5saW5lLWxpc3QgeyBwYWRkaW5nOiA2cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDMwJTsgbWFyZ2luLXJpZ2h0OiA0cHg7IG1hcmdpbi1ib3R0b206IDFweDsgfVxuICAgICAgICAgICAgICAgIC5jbHViLWFuYWx5emVyIC5pbmxpbmUtbGlzdCBsaSB7IGxpbmUtaGVpZ2h0OiAzMHB4OyB9XG4gICAgICAgICAgICAgICAgLmNsdWItYW5hbHl6ZXIgLmNsdWItYW5hbHl6ZXItcmVwb3J0IHsgfVxuICAgICAgICAgICAgICAgIC5jbHViLWFuYWx5emVyIC52YWx1ZTphZnRlciB7IGNvbnRlbnQ6IFwnOlwnIH1cbiAgICAgICAgICAgICAgICAuY2x1Yi1hbmFseXplciAudW50cmFkZWFibGU6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICJcXEUwNkYiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFVsdGltYXRlVGVhbS1JY29ucyxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmQxMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jbHViLWFuYWx5emVyIC51bnRyYWRlYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ1dC1uYXZpZ2F0aW9uLWJhci12aWV3IG5hdmJhci1zdHlsZS1sYW5kc2NhcGUiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9InRpdGxlIj5QYWxldG9vbHMgQ2x1YiBBbmFseXplcjwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+Jyk7Y29uc3QgZT1qUXVlcnkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IikpO2pRdWVyeShhLl9fcm9vdCkuYXBwZW5kKGUpLGUuYXBwZW5kKCdcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZWEtZmlsdGVyLWJhci12aWV3Ij5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1lbnUtY29udGFpbmVyIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJwbGF5ZXJzLWJ5LXJhdGluZyIgY2xhc3M9ImVhLWZpbHRlci1iYXItaXRlbS12aWV3IHNlbGVjdGVkIj5QbGF5ZXJzIGJ5IFJhdGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InBsYXllcnMtYnktcmFyaXR5IiBjbGFzcz0iZWEtZmlsdGVyLWJhci1pdGVtLXZpZXciPlBsYXllcnMgYnkgUmFyaXR5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0icGxheWVycy1ieS1sZWFndWUiIGNsYXNzPSJlYS1maWx0ZXItYmFyLWl0ZW0tdmlldyI+UGxheWVycyBieSBMZWFndWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJwbGF5ZXJzLWJ5LW5hdGlvbiIgY2xhc3M9ImVhLWZpbHRlci1iYXItaXRlbS12aWV3Ij5QbGF5ZXJzIGJ5IE5hdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PicpO2NvbnN0IGw9alF1ZXJ5KCc8ZGl2IGNsYXNzPSJ1dC1waW5uZWQtbGlzdC1jb250YWluZXIgdXQtY29udGVudC1jb250YWluZXIiPjwvZGl2PicpLGk9alF1ZXJ5KCc8ZGl2IGNsYXNzPSJ1dC1jb250ZW50Ij48L2Rpdj4nKSxyPWpRdWVyeSgnPGRpdiBjbGFzcz0idXQtcGlubmVkLWxpc3QgY2x1Yi1hbmFseXplciI+PC9kaXY+Jyk7ZnVuY3Rpb24gbihlKXtyZXR1cm5gPGxpIGNsYXNzPSJwbGF5ZXIiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJmaXJzdG5hbWUiPiR7ZS5kYXRhLmZ9PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibGFzdG5hbWUiPiR7ZS5kYXRhLmx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJyYXRpbmciPiR7ZS5yYXRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZS51bnRyYWRlYWJsZT8nPHNwYW4gY2xhc3M9InVudHJhZGVhYmxlIj48L3NwYW4+JzoiIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2UuaGFzT3duUHJvcGVydHkoImxvYW5zIik/JzxzcGFuIGNsYXNzPSJsb2FucyI+bG9hbnM6ICcrZS5sb2FucysiPC9zcGFuPiI6IiJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmB9aS5hcHBlbmQociksbC5hcHBlbmQoaSksZS5hcHBlbmQobCk7bGV0IG89JzxkaXYgaWQ9InJlcG9ydC1ieS1yYXRpbmciIGNsYXNzPSJjbHViLWFuYWx5emVyLXJlcG9ydCI+PHVsPic7Zm9yKGxldCBlIG9mIE9iamVjdC5rZXlzKHQuYnlSYXRpbmcpLnNvcnQoKSl7bys9YDxsaSBjbGFzcz0iaW5saW5lLWxpc3QiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0icmF0aW5nLXZhbHVlIHZhbHVlIj4ke2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0icmF0aW5nLWNvdW50IGNvdW50Ij4ke3QuYnlSYXRpbmdbZV0ucGxheWVycy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9ImhpZGUiPmA7Zm9yKGxldCBhIG9mIE9iamVjdC5rZXlzKHQuYnlSYXRpbmdbZV0uYnlSYXJpdHkpLnNvcnQoKSl7bys9YDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0icmF0aW5nLXJhcml0eSB2YWx1ZSI+JHthfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0icmF0aW5nLXJhcml0eS1jb3VudCBjb3VudCI+JHt0LmJ5UmF0aW5nW2VdLmJ5UmFyaXR5W2FdLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPSJoaWRlIHJhdGluZy1wbGF5ZXJzIj5gO2ZvcihsZXQgbCBvZiB0LmJ5UmF0aW5nW2VdLmJ5UmFyaXR5W2FdKWwuZGF0YXx8KGwuZGF0YT17ZjoiTm8iLGw6Ik5hbWUiLHI6MH0pLG8rPW4obCk7bys9IjwvdWw+PC9saT4ifW8rPSI8L3VsPjwvbGk+In1vKz0iPC91bD48L2Rpdj4iO2xldCBzPSc8ZGl2IGlkPSJyZXBvcnQtYnktcmFyaXR5IiBjbGFzcz0iY2x1Yi1hbmFseXplci1yZXBvcnQiPjx1bD4nO2ZvcihsZXQgZSBvZiBPYmplY3Qua2V5cyh0LmJ5UmFyaXR5KS5zb3J0KCkpe3MrPWA8bGkgY2xhc3M9ImlubGluZS1saXN0Ij5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InJhcml0eS12YWx1ZSB2YWx1ZSI+JHtlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InJhcml0eS1jb3VudCBjb3VudCI+JHt0LmJ5UmFyaXR5W2VdLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0iaGlkZSByYXJpdHktcGxheWVycyI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7Zm9yKGxldCBhIG9mIHQuYnlSYXJpdHlbZV0pcys9bihhKTtzKz0iPC91bD48L2xpPiJ9cys9IjwvdWw+PC9kaXY+IjtsZXQgeT0nPGRpdiBpZD0icmVwb3J0LWJ5LWxlYWd1ZSIgY2xhc3M9ImNsdWItYW5hbHl6ZXItcmVwb3J0Ij48dWw+Jztmb3IobGV0IGUgb2YgT2JqZWN0LmtleXModC5ieUxlYWd1ZSkuc29ydCgpKXt5Kz1gPGxpIGNsYXNzPSJpbmxpbmUtbGlzdCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibGVhZ3VlLXZhbHVlIHZhbHVlIj4ke2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImxlYWd1ZS1jb3VudCBjb3VudCI+JHt0LmJ5TGVhZ3VlW2VdLnBsYXllcnMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0iaGlkZSI+YDtmb3IobGV0IGEgb2YgT2JqZWN0LmtleXModC5ieUxlYWd1ZVtlXS5ieVRlYW0pLnNvcnQoKSl7eSs9YDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJsZWFndWUtdGVhbS12YWx1ZSB2YWx1ZSI+JHthfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJsZWFndWUtdGVhbS1jb3VudCBjb3VudCI+JHt0LmJ5TGVhZ3VlW2VdLmJ5VGVhbVthXS5wbGF5ZXJzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9ImhpZGUiPmA7Zm9yKGxldCBsIG9mIE9iamVjdC5rZXlzKHQuYnlMZWFndWVbZV0uYnlUZWFtW2FdLmJ5UmFyaXR5KSl7eSs9YDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibGVhZ3VlLXRlYW0tcmFyaXR5LXZhbHVlIHZhbHVlIj4ke2x9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJsZWFndWUtdGVhbS1yYXJpdHktY291bnQgY291bnQiPiR7dC5ieUxlYWd1ZVtlXS5ieVRlYW1bYV0uYnlSYXJpdHlbbF0ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9ImhpZGUgbGVhZ3VlLXRlYW0tcGxheWVycyI+YDtmb3IobGV0IGkgb2YgdC5ieUxlYWd1ZVtlXS5ieVRlYW1bYV0uYnlSYXJpdHlbbF0peSs9bihpKTt5Kz0iPC91bD4ifXkrPSI8L3VsPjwvbGk+In15Kz0iPC91bD48L2xpPiJ9eSs9IjwvdWw+PC9kaXY+IjtsZXQgYz0nPGRpdiBpZD0icmVwb3J0LWJ5LW5hdGlvbiIgY2xhc3M9ImNsdWItYW5hbHl6ZXItcmVwb3J0Ij48dWw+Jztmb3IobGV0IGUgb2YgT2JqZWN0LmtleXModC5ieU5hdGlvbikuc29ydCgpKXtjKz1gPGxpIGNsYXNzPSJpbmxpbmUtbGlzdCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJuYXRpb24tdmFsdWUgdmFsdWUiPiR7ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJuYXRpb24tY291bnQgY291bnQiPiR7dC5ieU5hdGlvbltlXS5wbGF5ZXJzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0iaGlkZSI+YDtmb3IobGV0IGEgb2YgT2JqZWN0LmtleXModC5ieU5hdGlvbltlXS5ieVJhcml0eSkpe2MrPWA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ibmF0aW9uLXJhcml0eS12YWx1ZSB2YWx1ZSI+JHthfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJuYXRpb24tcmFyaXR5LWNvdW50IGNvdW50Ij4ke3QuYnlOYXRpb25bZV0uYnlSYXJpdHlbYV0ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0iaGlkZSBuYXRpb24tcmFyaXR5LXBsYXllcnMiPmA7Zm9yKGxldCBsIG9mIHQuYnlOYXRpb25bZV0uYnlSYXJpdHlbYV0pYys9bihsKTtjKz0iPC91bD48L2xpPiJ9Yys9IjwvdWw+PC9saT4ifWMrPSI8L3VsPjwvZGl2PiI7Y29uc3QgYj1qUXVlcnkobyksdT1qUXVlcnkocyksZD1qUXVlcnkoeSkscD1qUXVlcnkoYyk7ci5hcHBlbmQoYikuYXBwZW5kKHUpLmFwcGVuZChkKS5hcHBlbmQocCksdS5oaWRlKCksZC5oaWRlKCkscC5oaWRlKCksalF1ZXJ5KCJsaSIscikuY2xpY2soZT0+e2pRdWVyeShlLmN1cnJlbnRUYXJnZXQpLmNoaWxkcmVuKCJ1bCIpLnRvZ2dsZSgpLGUuc3RvcFByb3BhZ2F0aW9uKCl9KTtjb25zdCBnPWpRdWVyeSgiLm1lbnUtY29udGFpbmVyID4gYnV0dG9uIixlKTtnLm9uKCJtb3VzZW92ZXIiLGU9PntnLnJlbW92ZUNsYXNzKCJob3ZlciIpLGpRdWVyeShlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCJob3ZlciIpfSkuY2xpY2soZT0+e3N3aXRjaChiLmhpZGUoKSx1LmhpZGUoKSxkLmhpZGUoKSxwLmhpZGUoKSxnLnJlbW92ZUNsYXNzKCJzZWxlY3RlZCIpLGpRdWVyeShlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCJzZWxlY3RlZCIpLGUuY3VycmVudFRhcmdldC5pZCl7Y2FzZSJwbGF5ZXJzLWJ5LXJhdGluZyI6Yi5zaG93KCk7YnJlYWs7Y2FzZSJwbGF5ZXJzLWJ5LXJhcml0eSI6dS5zaG93KCk7YnJlYWs7Y2FzZSJwbGF5ZXJzLWJ5LWxlYWd1ZSI6ZC5zaG93KCk7YnJlYWs7Y2FzZSJwbGF5ZXJzLWJ5LW5hdGlvbiI6cC5zaG93KCl9fSl9ZWxzZSB3aW5kb3cuc2V0VGltZW91dChlLDFlMyl9KCksZnVuY3Rpb24gZSgpe3NlcnZpY2VzLkxvY2FsaXphdGlvbiYmalF1ZXJ5KCJoMS50aXRsZSIpLmh0bWwoKT09PXNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgibmF2YmFyLmxhYmVsLmhvbWUiKT8oZ2V0QXBwTWFpbigpLmdldFJvb3RWaWV3Q29udHJvbGxlcigpLnNob3dHYW1lVmlldz1mdW5jdGlvbigpe2lmKHRoaXMuX3ByZXNlbnRlZFZpZXdDb250cm9sbGVyIGluc3RhbmNlb2YgVVRHYW1lVGFiQmFyQ29udHJvbGxlcilyZXR1cm4hMTt2YXIgZSxhPW5ldyBVVEdhbWVUYWJCYXJDb250cm9sbGVyLHQ9bmV3IFVUR2FtZUZsb3dOYXZpZ2F0aW9uQ29udHJvbGxlcixuPW5ldyBVVEdhbWVGbG93TmF2aWdhdGlvbkNvbnRyb2xsZXIsbD1uZXcgVVRHYW1lRmxvd05hdmlnYXRpb25Db250cm9sbGVyLGk9bmV3IFVUR2FtZUZsb3dOYXZpZ2F0aW9uQ29udHJvbGxlcixyPW5ldyBVVEdhbWVGbG93TmF2aWdhdGlvbkNvbnRyb2xsZXIsbz1uZXcgVVRHYW1lRmxvd05hdmlnYXRpb25Db250cm9sbGVyLHM9bmV3IFVUVGFiQmFySXRlbVZpZXcseT1uZXcgVVRUYWJCYXJJdGVtVmlldyxjPW5ldyBVVFRhYkJhckl0ZW1WaWV3LGI9bmV3IFVUVGFiQmFySXRlbVZpZXcsdT1uZXcgVVRUYWJCYXJJdGVtVmlldyxkPW5ldyBVVFRhYkJhckl0ZW1WaWV3O2lmKHQuaW5pdFdpdGhSb290Q29udHJvbGxlcihuZXcgVVRIb21lSHViVmlld0NvbnRyb2xsZXIpLG4uaW5pdFdpdGhSb290Q29udHJvbGxlcihuZXcgVVRTcXVhZHNIdWJWaWV3Q29udHJvbGxlciksbC5pbml0V2l0aFJvb3RDb250cm9sbGVyKG5ldyBVVFRyYW5zZmVyc0h1YlZpZXdDb250cm9sbGVyKSxpLmluaXRXaXRoUm9vdENvbnRyb2xsZXIobmV3IFVUU3RvcmVWaWV3Q29udHJvbGxlciksci5pbml0V2l0aFJvb3RDb250cm9sbGVyKG5ldyBVVENsdWJIdWJWaWV3Q29udHJvbGxlciksby5pbml0V2l0aFJvb3RDb250cm9sbGVyKG5ldyBVVEN1c3RvbWl6ZUh1YlZpZXdDb250cm9sbGVyKSxzLmluaXQoKSxzLnNldFRhZyhVVEdhbWVUYWJCYXJDb250cm9sbGVyLlRhYlRhZy5IT01FKSxzLnNldFRleHQoc2VydmljZXMuTG9jYWxpemF0aW9uLmxvY2FsaXplKCJuYXZiYXIubGFiZWwuaG9tZSIpKSxzLmFkZENsYXNzKCJpY29uLWhvbWUiKSx5LmluaXQoKSx5LnNldFRhZyhVVEdhbWVUYWJCYXJDb250cm9sbGVyLlRhYlRhZy5TUVVBRFMpLHkuc2V0VGV4dChzZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoIm5hdi5sYWJlbC5zcXVhZHMiKSkseS5hZGRDbGFzcygiaWNvbi1zcXVhZCIpLGMuaW5pdCgpLGMuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLlRSQU5TRkVSUyksYy5zZXRUZXh0KHNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgibmF2LmxhYmVsLnRyYWRpbmciKSksYy5hZGRDbGFzcygiaWNvbi10cmFuc2ZlciIpLGIuaW5pdCgpLGIuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLlNUT1JFKSxiLnNldFRleHQoc2VydmljZXMuTG9jYWxpemF0aW9uLmxvY2FsaXplKCJuYXZiYXIubGFiZWwuc3RvcmUiKSksYi5hZGRDbGFzcygiaWNvbi1zdG9yZSIpLGQuaW5pdCgpLGQuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLkNMVUIpLGQuc2V0VGV4dChzZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoIm5hdi5sYWJlbC5jbHViIikpLGQuYWRkQ2xhc3MoImljb24tY2x1YiIpLHUuaW5pdCgpLHUuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLlNUQURJVU0pLHUuc2V0VGV4dChzZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoIm5hdmJhci5sYWJlbC5jdXN0b21pemVIdWIiKSksdS5hZGRDbGFzcygiaWNvbi1zdGFkaXVtIiksdC50YWJCYXJJdGVtPXMsbi50YWJCYXJJdGVtPXksbC50YWJCYXJJdGVtPWMsaS50YWJCYXJJdGVtPWIsci50YWJCYXJJdGVtPWQsby50YWJCYXJJdGVtPXUsZT1bdCxuLGwsaSxvLHJdLCFpc1Bob25lKCkpe3ZhciBwPW5ldyBVVEdhbWVGbG93TmF2aWdhdGlvbkNvbnRyb2xsZXIsZz1uZXcgVVRHYW1lRmxvd05hdmlnYXRpb25Db250cm9sbGVyLFQ9bmV3IFVUR2FtZUZsb3dOYXZpZ2F0aW9uQ29udHJvbGxlcix3PW5ldyBVVEdhbWVGbG93TmF2aWdhdGlvbkNvbnRyb2xsZXI7cC5pbml0V2l0aFJvb3RDb250cm9sbGVyKG5ldyBVVFNCQ0h1YlZpZXdDb250cm9sbGVyKSxnLmluaXRXaXRoUm9vdENvbnRyb2xsZXIobmV3IFVUTGVhZGVyYm9hcmRzSHViVmlld0NvbnRyb2xsZXIpLFQuaW5pdFdpdGhSb290Q29udHJvbGxlcihuZXcgVVRDbHViQW5hbHl6ZXJWaWV3Q29udHJvbGxlciksdy5pbml0V2l0aFJvb3RDb250cm9sbGVyKG5ldyBVVEFwcFNldHRpbmdzVmlld0NvbnRyb2xsZXIpO3ZhciBtPW5ldyBVVFRhYkJhckl0ZW1WaWV3O20uaW5pdCgpLG0uc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLlNCQyksbS5zZXRUZXh0KHNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgibmF2LmxhYmVsLnNiYyIpKSxtLmFkZENsYXNzKCJpY29uLXNiYyIpO3ZhciB2PW5ldyBVVFRhYkJhckl0ZW1WaWV3O3YuaW5pdCgpLHYuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLkxFQURFUkJPQVJEUyksdi5zZXRUZXh0KHNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgibmF2LmxhYmVsLmxlYWRlcmJvYXJkcyIpKSx2LmFkZENsYXNzKCJpY29uLWxlYWRlcmJvYXJkcyIpO3ZhciBoPW5ldyBVVFRhYkJhckl0ZW1WaWV3O2guaW5pdCgpLGguc2V0VGFnKDgpLGguc2V0VGV4dCgiQ2x1YiBBbmFseXplciIpLGguYWRkQ2xhc3MoImljb24tY2x1YiIpO3ZhciBDPW5ldyBVVFRhYkJhckl0ZW1WaWV3O0MuaW5pdCgpLEMuc2V0VGFnKFVUR2FtZVRhYkJhckNvbnRyb2xsZXIuVGFiVGFnLlNFVFRJTkdTKSxDLnNldFRleHQoc2VydmljZXMuTG9jYWxpemF0aW9uLmxvY2FsaXplKCJidXR0b24uc2V0dGluZ3MiKSksQy5hZGRDbGFzcygiaWNvbi1zZXR0aW5ncyIpLHAudGFiQmFySXRlbT1tLGcudGFiQmFySXRlbT12LHcudGFiQmFySXRlbT1DLFQudGFiQmFySXRlbT1oLGU9ZS5jb25jYXQoW3AsZyx3LFRdKX1yZXR1cm4gYS5pbml0V2l0aFZpZXdDb250cm9sbGVycyhlKSxhLmdldFZpZXcoKS5hZGRDbGFzcygiZ2FtZS1uYXZpZ2F0aW9uIiksdGhpcy5wcmVzZW50Vmlld0NvbnRyb2xsZXIoYSwhMCxmdW5jdGlvbigpe3NlcnZpY2VzLlVSTC5oYXNEZWVwTGlua1VSTCgpJiZzZXJ2aWNlcy5VUkwucHJvY2Vzc0RlZXBMaW5rVVJMKCl9KSwhMH0sZ2V0QXBwTWFpbigpLmdldFJvb3RWaWV3Q29udHJvbGxlcigpLnNob3dHYW1lVmlldygpKTp3aW5kb3cuc2V0VGltZW91dChlLDFlMyl9KCl9KCk7"