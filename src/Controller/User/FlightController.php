<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FlightController extends AbstractController
{
    #[Route('/flights', name: 'flights')]
    public function index(): Response
    {
        return $this->render('user/flight/index.html.twig', [
            'controller_name' => 'FlightController',
        ]);
    }
}
